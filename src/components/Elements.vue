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
      elements: this.elements
    }
  },
  data() {
    return {
      elements: new Promise(resolve => {
        getStripe(this.spk).then(stripe => {
          resolve(stripe.elements())
        })
      })
    }
  }
  /*functional: true,
  render(h, context) {
    console.log('context', context)
    return h('div', context.data, context.children)
  }*/
}
</script>