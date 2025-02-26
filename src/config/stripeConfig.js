import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  'pk_test_51QjiUVGVAuCtbjZQLcvmb8lgCS9NIRe874FNAYAhawIJBvV3LM7oy3e0mAKpCPImjBB9L5PUD801tuTeibqYeajp00eZmRs8vZ'
);

export default stripePromise;