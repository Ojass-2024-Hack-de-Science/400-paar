const express = require('express');
const router = express.Router();
const newusers =require('../models/Registration');
const bcrypt=require('bcryptjs')
const passport=require('passport')
const OAuth2Strategy=require('passport-google-oauth2').Strategy

const clientid ="517659958669-a7fhadka1l9bgu9d85mi4sfa2hkt9r63.apps.googleusercontent.com"
const clientsecret="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"


router.post("/registration",async(req,res)=>{
   try{
    const password=req.body.Password;
    const cpassword=req.body.Confirm_Password;
    if(password===cpassword){
        const newUser=new newusers({
            Name:req.body.Name,
                    Email:req.body.Email,
                    Password:req.body.Password,
                    Confirm_Password:req.body.Confirm_Password
        })

        const token= await newUser.generateAuthToken();

        console.log("user just registered",newUser);
        const createUser=await newUser.save();
        res.status(200).send(createUser);
    }
    else{
        res.send("password not matching")
    }

   }
   catch(err){
    res.status(400).send(err)
   }

})

router.post("/login",async(req,res)=>{
    try{
        const email=req.body.Email;
         console.log(req.body)
        const password=req.body.Password;
        const useremail=await newusers.findOne({Email:email})
        // console.log(useremail)
        const isMatch=await bcrypt.compare(password,useremail.Password)
        // console.log(isMatch)
    
        if(isMatch){
            res.status(200).send(useremail)
            console.log("login sucessful...")
        }
        else{
            res.status(400).send("no such email is registered in website")
        }
    }
    catch(err){
         res.status(400).send(err)
    }
        
    })
    router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

    router.get("/auth/google/callback",
        passport.authenticate("google", {
            successRedirect: "http://localhost:3000",
            failureRedirect: "http://localhost:3000/login"
        })
    );

    router.get("/login/success",async(req,res)=>{
        console.log("sucess",req.user)
        
     if(req.user){
        res.status(200).json({message:"User Login",user:req.user})
     }
     else{
        res.status(400).json({message:"Not Authorized"})
     }
    })
    
    router.get("/logout",(req,res,next)=>{
         req.logout(function(err){
            if(err){return next(err)}
            res.redirect("/")
         })
    })

    // router.get("/login/cart", async (req, res) => {
    //     try {
    //         const userId = req.user._id;
    //         const cartItems = await cartitem.find({ userId });
    //         res.json(cartItems);
    //     } catch (error) {
    //         console.error("Error fetching cart items:", error);
    //         res.status(500).json({ message: "Internal server error" });
    //     }
    // });
    

   

module.exports = router;