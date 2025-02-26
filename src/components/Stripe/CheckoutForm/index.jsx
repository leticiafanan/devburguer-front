import { useLocation } from "react-router-dom";

export function CheckoutForm() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>
        Form
      </h1>
    </div>
  );
}