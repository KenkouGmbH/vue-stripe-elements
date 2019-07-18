# @kenkou/vue-stripe-elements

A Vue wrapper for stripe elements. This library was inspired in [fromAtoB/vue-stripe-elements](https://github.com/fromatob/vue-stripe-elements), but has the following improvements:

- No need to previously setup `stripe.js`: is injected at runtime. If it is already configured it works as well.
- No custom api defined: you can access the `stripe.js` instance by calling `getStripe` (returns a `Promise`) and then [`stripe.js`](https://stripe.com/docs/stripe-js/reference) api itself.

## Install

```sh
npm install --save @kenkou/vue-stripe-elements
```

or

```sh
yarn add @kenkou/vue-stripe-elements
```

## Usage

Stripe javascript library `stripe.js` v3 will be automatically injected if `window.Stripe` global library is not found. The elements should be wrapped inside an `<Elements>` component as shown below.

```js
<Elements spk="pk_test_xxxxxxxxxxxxxxxxx">
  <div slot-scope="{ elements }">
    <card-number :elements="elements"></card-number>
    ...
    <card-cvc :elements="elements"></card-cvc>
    ...
    <card-expiry :elements="elements"></card-expiry>
  </div>
</Elements>
```

See `src/App.vue` for a minimalist example.

To get access to `stripe.js` instance:

```js
import { getStripe } from '@kenkou/vue-stripe-elements'

// `getStripe()` returns a `Promise` to the stripe instance
// created by the <Elements> component
getStripe().then(stripe => {
  stripe.createToken(...)
})
```

From now on you can follow the [`stripe.js`](https://stripe.com/docs/stripe-js/reference) api itself.

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
yarn build
```
