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
import Elements from './components/Elements'
import { CardNumber, CardCvc, CardExpiry } from './components/Element'

export default {
  components: {
    Elements,
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