import "dotenv/config";

import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import connectMongo from "./settings/database";
import v1 from "./routes";
import passport from "passport";
import strategy from "./middlewares/passport";
import environments from "./settings/env.variables";

const app: Application = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(passport.initialize());

passport.use(strategy);

// routes
app.use("/api/v1", v1);

// settings
const server = app.listen(environments.PORT, () => {
  console.log(`Server is running on port ${environments.PORT}`);
  connectMongo(environments.MONGO_URI);
});

export { server, app };
