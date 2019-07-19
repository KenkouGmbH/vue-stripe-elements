<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { getStripe } from '../stripe-promise'

export default {
  props: { spk: { type: String, required: true } },
  provide() {
    return {
      stripe: this.stripe
    }
  },
  data() {
    return {
      stripe: new Promise(resolve => {
        getStripe(this.spk).then(stripe => resolve(stripe))
      })
    }
  }
}
</script>

