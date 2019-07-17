import { getElementsInstance } from '../stripe-promise'

export default {
  // please see https://stripe.com/docs/elements/reference for details
  props: {
    elements: {
      type: Promise, // stripe elements promise
      required: true
    },
    value: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false
    }
  },
  async mounted() {
    // get stripe elements instance
    const elements = await this.elements
    const options = { ...this.options }
    options.style = { ...baseStyle, ...options.style }
    this._element = elements.create(this.type, this.spk, options)
    this._element.on('blur', event => this.$emit('blur'))
    this._element.on('change', event => this.$emit('change', event))
    this._element.on('click', event => this.$emit('click', event))
    this._element.on('focus', event => this.$emit('focus'))
    this._element.on('ready', event => this.$emit('ready'))

    const el = document.createElement('div')
    this._element.mount(el)
    this.$el.appendChild(el)
  },
  beforeDestroy() {
    this._element.destroy()
  },
  methods: {
    blur() {
      this._element.blur()
    },
    clear() {
      this._element.clear()
    },
    focus() {
      this._element.focus()
    },
    update() {
      this._element.update()
    }
  }
}

const baseStyle = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: 'Helvetica Neue',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
}
