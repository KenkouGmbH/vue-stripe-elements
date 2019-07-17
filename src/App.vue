<template>
  <Elements spk="pk_test_laBt3DdV25dOfpJ2ZnPkK0Ra">
    <div slot-scope="{ elements }">
      <card-number :elements="elements"></card-number>
      <card-cvc :elements="elements"></card-cvc>
      <card-expiry :elements="elements"></card-expiry>
    </div>
  </Elements>
</template>

<script>
import Vue from 'vue'
import Elements from './components/Elements'
import Card from './components/Card'
import CardNumber from './components/CardNumber'
import CardCvc from './components/CardCvc'
import CardExpiry from './components/CardExpiry'

export default {
  components: {
    Elements,
    Card,
    CardNumber,
    CardCvc,
    CardExpiry
  },
  data() {
    return {
      name: 'Hello World!'
    }
  }
}
</script>