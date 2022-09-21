//Build-in Moduless
import os from "os";
import http from "http";

//User-defined Modules
import envConfig from "./dotenv";
import rootDir from "./rootPath";
import dbConnection from "./connection";
import allowCrossDomain from "../api/middlewares/crossorigin.middleware";

//Third-party Modules
import express from "express";
import { Application } from "express-serve-static-core";
import logger from "./logger";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import openApiMiddleware from "../api/middlewares/openapi.middleware";
import errorHandler from "../api/middlewares/errorHandler.middleware";

// Initializing an express server
const app = express();

//Defining a server class with its methods
export default class ExpressServer {
  constructor() {
    envConfig;
    //Database Connection 
    dbConnection();
    app.use(cors());
    app.use(allowCrossDomain);
    app.use(
      bodyParser.json({
        limit: process.env.REQUEST_LIMIT || "100kb",
      })
    );
    app.use(
      bodyParser.urlencoded({
        extended: false,
        limit: process.env.REQUEST_LIMIT || "100kb",
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));

    //express middleware to be able to get request body as json
    app.use(express.json());

    //Definig static values
    app.use(express.static(`${rootDir}/static`));

    //Using OpenApi Middleware
    openApiMiddleware(app);
  }

  //Routes Method for handling routes for application
  routesMethod(routes: (app:Application) => void): ExpressServer {
    /*
      Note: Always use all api routes call before passing express server through error handler middleware
    */
    routes(app);
    //Using error handler middleware
    app.use(errorHandler);
    return this;
  }

  //Method for listening requests to server
  listener(
    backend_protocol: string,
    portNumber: number,
    hostIp: string
  ): Application {
    const serverEventListener = (
      protocol: string,
      port: number,
      ip: string
    ): void => {
      logger.info(
        `up and running in ${
          process.env.NODE_ENVIRONMENT || "Development"
        } @: ${protocol}-${ip}-${os.hostname()} on port: ${port}`
      );
    };

    http
      .createServer(app)
      .listen(
        portNumber,
        parseInt(hostIp),
        serverEventListener(backend_protocol, portNumber, hostIp)!
      );
    return app;
  }
}
