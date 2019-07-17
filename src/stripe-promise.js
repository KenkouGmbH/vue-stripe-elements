export let instance = null
let attempts = 0
const maxAttempts = 100

export const getStripe = (spk = '') =>
  new Promise((resolve, reject) => {
    // if instance is set, just return it
    if (instance) {
      resolve(instance)
      return
    }
    // if there is no key then we can't progress
    if (spk === '') {
      reject('Stripe spk not set')
      return
    }
    // if Stripe global variable already exist
    // create the instance and return
    if (window.Stripe) {
      instance = window.Stripe(spk)
      resolve(instance)
      return
    }
    // otherwise inject stripe v3 dynamically
    // since there is no apparent way to observe
    // the window object we poll here until we
    // get the Stripe global variable defined
    const interval = setInterval(() => {
      attempts = attempts + 1
      console.log(
        '[@kenkou/vue-stripe-elements] attempting to set stripe',
        attempts
      )
      if (window.Stripe) {
        console.log(
          '[@kenkou/vue-stripe-elements] stripe has been successfully injected'
        )
        instance = window.Stripe(spk)
        resolve(instance)
        clearInterval(interval)
      }
      if (attempts > maxAttempts) {
        clearInterval(interval)
        reject(`unable to detect Stripe, max attempts ${maxAttempts} reached`)
      }
    }, 1000)

    const plugin = document.createElement('script')
    plugin.setAttribute('src', 'https://js.stripe.com/v3/')
    document.head.appendChild(plugin)
  })
