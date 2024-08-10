import { ReactNode } from "react"

import FormPage from "@pages/FormPage"
import SignupForm from "./SignupForm"
import MultistepForm from "./MultistepForm"
import SubscribeForm from "./SubscribeForm"

export type FormElement = {
  id: string
  title: string
  element: ReactNode
}

const formElements: FormElement[] = [
  {
    id: "signup",
    title: "Signup Form",
    element: <FormPage children={<SignupForm />} />
  },
  {
    id: "multistep",
    title: "Multistep Form",
    element: <FormPage children={<MultistepForm />} />
  },
  {
    id: "subscribe",
    title: "Subscription Form",
    element: <FormPage children={<SubscribeForm />} />
  },
]

export default formElements