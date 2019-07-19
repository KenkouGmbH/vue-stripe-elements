[![NPM](https://nodei.co/npm/@kenkou/vue-stripe-elements.png)](https://nodei.co/npm/@kenkou/vue-stripe-elements/)
[![npm](https://img.shields.io/npm/dm/@kenkou/vue-stripe-elements.svg?style=flat-square)](https://www.npmjs.com/package/@kenkou/vue-stripe-elements)

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

Stripe official javascript library `stripe.js` `v3` will be automatically injected if `window.Stripe` global variable is not set.

```js
<Stripe spk="pk_test_xxxxxxxxxxxxxxxxx">
  ...
  <Elements>
    <card-number ref="cardNumber" />
    ...
    <card-cvc />
    ...
    <card-expiry />
  </Elements>
  ...
</Stripe>
```

To access the stripe element created in each component call the `element()` method. To access the stripe instance use `getStripe` to get a promise to it. For example, to tokenize a card do:

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

## Live demo

We got a free demo for you!

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-7wqy3?fontsize=14)

Remember to set the `spk` value inside `data()` function.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run `App.vue` example:

```sh
yarn serve
```

To create a production build:

```sh
yarn build
```

Built with love at [KenKou](https://www.kenkou.de).
