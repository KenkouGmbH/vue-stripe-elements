import { getStripe } from '../stripe-promise'

export default {
  props: { spk: { type: String, required: true } },
  data() {
    return {
      elements: new Promise(resolve => {
        getStripe(this.spk).then(stripe => resolve(stripe.elements()))
      })
    }
  },
  render() {
    console.log('[ElementS] rendering', this.elements)
    return this.$scopedSlots.default({ elements: this.elements })
  }
}
