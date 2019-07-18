<template>
  <Elements :spk="spk">
    <div slot-scope="{ elements }">
      <card-number
        :elements="elements"
        ref="cardNumber"
        :options="stripeOptions"
        @change="number = $event.complete"
      ></card-number>
      <card-cvc
        :elements="elements"
        ref="cardCvc"
        :options="stripeOptions"
        @change="cvc = $event.complete"
      ></card-cvc>
      <card-expiry
        :elements="elements"
        ref="cardExpiry"
        :options="stripeOptions"
        @change="expiry = $event.complete"
      ></card-expiry>
      <button @click="tokenize">get token</button>
      <div>{{ token }}</div>
    </div>
  </Elements>
</template>

<script>
import { Elements, CardNumber, CardCvc, CardExpiry, getStripe } from './lib'

export default {
  components: {
    Elements,
    CardNumber,
    CardCvc,
    CardExpiry
  },
  methods: {
    async tokenize() {
      // get one of the stripe elements created
      const cardNumber = this.$refs.cardNumber.element()
      // see the https://stripe.com/docs/stripe-js/reference api
      const stripe = await getStripe()
      const { token, error } = await stripe.createToken(cardNumber)
      if (token) this.token = token
      else this.token = error
      console.log('tokenized element', token)
    },
    update() {
      this.complete = this.number && this.expiry && this.cvc
      // update the "valid" parent's property
      this.$emit('update:valid', this.complete)
      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number() {
      this.update()
    },
    expiry() {
      this.update()
    },
    cvc() {
      this.update()
    }
  },
  data() {
    return {
      // create a .env file with the content VUE_APP_SPK=pk_test_xxxxxxxxxxxxxxx in the root of the project
      spk: process.env.VUE_APP_SPK,
      token: '-',
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
        style: {
          base: {
            color: '#303238',
            fontSize: '12px',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#ccc'
            }
          }
        }
      }
    }
  }
}
</script>
