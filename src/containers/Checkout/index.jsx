import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from '../../config/stripeConfig'

export function Checkout() {
  const {
    state: {clientSecret},
  } = useLocation();

  console.log(clientSecret);

  return (
    <Elements stripe={stripePromise} options={{clientSecret}}>
      <h1>Chechout</h1>
    </Elements>
  );
}