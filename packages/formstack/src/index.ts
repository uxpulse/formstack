import 'dotenv/config';
import cors from "cors";
import express from "express";
import "express-async-errors";

// Vercel Functions
export const config = {
  runtime: "edge",
};

const PORT = process.env.PORT || 3001;
const BASE_PATH = process.env.BASE_PATH || "/api";

// Dependencies
import errorHandler from "./middlewares/errors";
import formsRouter from "./routes/forms";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(BASE_PATH, formsRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express
module.exports = app;