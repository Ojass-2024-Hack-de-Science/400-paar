const express = require('express');
require('./db/connection');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const app = express();
const OAuth2Strategy = require('passport-google-oauth2').Strategy;
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51P2DMDSE1OQXAawOKzb4cDReS5Mhkwk5Ri28J0ybOQpK9QpoweOCSGPKZLtePILJB2UenH7ZvmsZbiZS6UHrlZCt00HsFqhLKa'
);
// const uuid = require('uuid');
app.use(express.static('public'));
const router = require('./router/router');
const userdb = require('./models/Googlereg');
const { CountryCodes } = require('validator/lib/isISO31661Alpha2');

const clientid =
  '517659958669-a7fhadka1l9bgu9d85mi4sfa2hkt9r63.apps.googleusercontent.com';
const clientsecret = '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';
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: '1889347247sdbfhfbsfd',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userdb.findOne({ googleId: profile.id });
        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }
        console.log(user);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(router);

app.post('/payment', async (req, res) => {
  try {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.product,
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      // success_url: `http://localhost:3000/success/${products[0].hrs}:${products[0].min}:${products[0].sec}`,
      success_url: `https://web.parsec.app/`,

      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Error processing payment:', err);
    res.status(500).json({ error: 'Payment processing error' });
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
