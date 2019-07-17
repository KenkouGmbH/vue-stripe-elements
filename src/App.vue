<template>
  <Elements spk="dfdf">
    <div slot-scope="{ elements }">
      <card :elements="elements" >
      <div>another div {{name}}</div>
    </div>
  </Elements>
</template>

<script>
import Vue from 'vue'
import Elements from './components/Elements'
import Card from './components/Card.vue'

console.log('card', Card)

export default {
  components: {
    Elements,
    Card
  },
  data() {
    return {
      name: 'Hello World!'
    }
  }
}
</script>