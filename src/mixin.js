import props from './components/props'
import StripeElement from './components/StripeElement'

export default {
  props,
  components: { StripeElement },
  methods: {
    blur() {
      this.$refs.element.blur()
    },
    clear() {
      this.$refs.element.clear()
    },
    focus() {
      this.$refs.element.focus()
    },
    update(options) {
      this.$refs.element.update(options)
    }
  }
}
