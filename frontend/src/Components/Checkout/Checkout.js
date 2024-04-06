import { loadStripe } from '@stripe/stripe-js';
import './checkout.css'

function Checkout({name = 'pc-900', price = '20',time = 2}) {
    // console.log(price);
    price = price * time;
  const cards = [
    {
      product: name,
      price: price,
      productby: "test",
      time : time
    }
  ];

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51P2DMDSE1OQXAawOMap7KRMfvFmclzUwa6ZpH0XHVsiZGSEgxuBGul9Z5SXMMVgrJXHsTydA3WaaYLX9Ikh57nPi00CrwNTssn");

    const body = {
      products: cards
    };

    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch("http://localhost:8000/payment", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <div >
      <button onClick={makePayment} className='btn1'>Payment</button>
    </div>
  );
}

export default Checkout;
