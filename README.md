# @kenkou/vue-stripe-elements

A Vue wrapper for stripe elements. This library was inspired in [fromAtoB/vue-stripe-elements](https://github.com/fromatob/vue-stripe-elements), but has the following improvements:

- No need to previously setup `stripe.js`: is injected at runtime, currently `v3`. If it is already configured it works as well.
- No custom api defined: you can access the `stripe.js` instance by calling `getStripe` (returns a `Promise`) and then use[`stripe.js`](https://stripe.com/docs/stripe-js/reference) api itself.

## Install

```sh
npm install --save @kenkou/vue-stripe-elements
```

or

```sh
yarn add @kenkou/vue-stripe-elements
```

## Usage

Stripe official javascript library `stripe.js` `v3` will be automatically injected if `window.Stripe` global variable is not set. Elements should be wrapped inside an `<Elements>` component as shown below.

```js
<Elements spk="pk_test_xxxxxxxxxxxxxxxxx">
  <div slot-scope="{ elements }">
    <card-number :elements="elements" ref="cardNumber"></card-number>
    ...
    <card-cvc :elements="elements" ref="cardCvc"></card-cvc>
    ...
    <card-expiry :elements="elements" ref="cardExpiry"></card-expiry>
  </div>
</Elements>
```

Notice the usage of `slot-scope="{ elements }"`, which makes the `elements = stripe.elements(options)` variable available for the children. To access the stripe element created in each component call the `element()` method. To access the stripe instance use `getStripe` to get a promise to it. For example, to tokenize a card do:

```js
<script>
import { getStripe } from '@kenkou/vue-stripe-elements'

export default {
  ...
  methods: {
   async tokenize() {
    // get one of the stripe elements created
    const cardNumber = this.$refs.cardNumber.element()
    // see the https://stripe.com/docs/stripe-js/reference api
    const stripe = await getStripe()
    const result = await stripe.createToken(cardNumber)
    console.log('tokenized element', result)
  }
}
</script>
```

See `src/App.vue` for a complete example.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn serve
```

To create a production build:

```sh
yarn build
```

Built with love at [KenKou](https://www.kenkou.de).
