import { z } from "zod"

export interface FormSchema {
  id: string
  formSchema: z.ZodType
}

export const subscribeFormSchema: FormSchema = {
  id: "subscribe",
  formSchema: z.object({
    email: z.string().min(1, {
      message: "Email is required",
    }).email({
      message: "Invalid email address"
    })
  }),
}

const formConfig = {
  forms: [
    subscribeFormSchema,
  ],
}

export default formConfig