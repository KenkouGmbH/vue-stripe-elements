import * as stripePromise from './stripe-promise'
import * as Element from './components/Element'
import * as ElementsComponent from './components/Elements'

export const Card = Element.Card
export const CardNumber = Element.CardNumber
export const CardCvc = Element.CardCvc
export const CardExpiry = Element.CardExpiry
export const Iban = Element.Iban
export const IdealBank = Element.IdealBank
export const PaymentRequestButton = Element.PaymentRequestButton

export const Elements = ElementsComponent.default

export const getStripe = stripePromise.getStripe
