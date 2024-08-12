import { Request, Response, Router } from "express";
import BadRequestError from "../middlewares/badRequestError";

const router = Router();

/* Confirm existing forms posted by user */
const getHandler = async (req: Request, res: Response) => {
  // TODO Check user session
  const { sessionId } = req.query;
  if (!sessionId) {
    throw new BadRequestError({ code: 400, message: "Session ID is required!", logging: true });
  }
  
  try {
    // TODO Database connection should be here
    return res.status(200).send({ message: "Completed form identifiers" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

/* Process form data posted by user */
const postHandler = (req: Request, res: Response) => {
  const { formId } = req.query;
  if (!formId) {
    throw new BadRequestError({ code: 400, message: "Form ID is required!", logging: true });
  }

  // TODO Third-party conection should be here
  return res.status(201).send({ data: req.body });
};

router.get("/forms", getHandler);
router.post("/forms", postHandler);

export default router;