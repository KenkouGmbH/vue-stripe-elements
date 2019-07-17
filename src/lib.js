import StripeElement from './components/StripeElement.vue'
import * as stripeHelper from './stripe-promise'

export const stripeElement = StripeElement
export const getElementsInstance = stripeHelper.getElementsInstance
export const getStripe = stripeHelper.getStripe
