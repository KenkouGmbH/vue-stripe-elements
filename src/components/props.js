export default {
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
}
