import Vue from 'vue'
import * as stripePromise from './stripe-promise'
import CardElement from './components/Card'
import CardNumberElement from './components/CardNumber'
import CardCvcElement from './components/CardCvc'
import CardExpiryElement from './components/CardExpiry'
import IbanElement from './components/Iban'
import IdealBankElement from './components/IdealBank'
import PaymentRequestButtonElement from './components/PaymentRequestButton'

export const Card = CardElement
export const CardNumber = CardNumberElement
export const CardCvc = CardCvcElement
export const CardExpiry = CardExpiryElement
export const Iban = IbanElement
export const IdealBank = IdealBankElement
export const PaymentRequestButton = PaymentRequestButtonElement

export const getStripe = stripePromise.getStripe
