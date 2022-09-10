//Build-In Modules

//Third-party Modules
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Application } from "express";

//User-defined Modules
import allowCrossDomain from "./crossorigin.middleware";

const initialMiddleware = (app: Application) => {
  app.use(cors());
  app.use(allowCrossDomain());
  app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT ?? `100kb` }));
  app.use(
    bodyParser.urlencoded({
      extended: false,
      limit: process.env.REQUEST_LIMIT ?? "100kb",
    })
  );
  app.use(cookieParser(process.env.SESSION_SECRET));
};

export default initialMiddleware;
