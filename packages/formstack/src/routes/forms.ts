import { Request, Response, Router } from "express";
import BadRequestError from "../middlewares/badRequestError"

// Import specific form schemas
import config, { FormSchema } from "../formstack.config"

const router: Router = Router()

/* Confirm existing forms posted by user */
const getHandler = async (req: Request, res: Response) => {
  // TODO Check user session
  const { sessionId } = req.query
  if (!sessionId) {
    throw new BadRequestError({ code: 400, message: "Session ID is required!", logging: true })
  }
  
  try {
    // TODO Database connection should be here
    return res.status(200).send({ message: "Completed form identifiers" })
  } catch (err) {
    return res.status(500).send({ message: err })
  }
}

/* Process form data posted by user */
const postHandler = async (req: Request, res: Response) => {
  const { formId } = req.query
  if (!formId) {
    throw new BadRequestError({ code: 400, message: "Form ID is required!", logging: true })
  }

  /* Check form config */
  const formConfig = config.forms && config.forms.find((form: FormSchema) => form.id === formId)
  
  if (!formConfig || !formConfig.formSchema) {
    throw new BadRequestError({ code: 400, message: "Form not found!", logging: true })
  }

  try {
    const formData = formConfig.formSchema.parse(req.body)
    return res.status(201).send({ data: formData })
  } catch (error) {
    throw new BadRequestError({ code: 400, message: "Form data is required!", context: { error }, logging: true })
  }
}

router.get("/forms", getHandler)
router.post("/forms", postHandler)

export default router