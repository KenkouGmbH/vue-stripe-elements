<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['stripe'],
  provide() {
    return {
      elements: this.elements
    }
  },
  data() {
    return {
      elements: new Promise(resolve => {
        this.stripe.then(stripe => {
          resolve(stripe.elements())
        })
      })
    }
  }
}
</script>