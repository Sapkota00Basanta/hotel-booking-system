//Build-in Modules
import path from "path";

//User-Defined Modules
import rootDir from "../../common/rootPath";

//Third-party Modules
import * as openApiValidator from "express-openapi-validator";
import express, { Application } from "express";

const openApiSpecification = path.join(`${rootDir}/common/open-api.yml`);
const responseValidation = !!(
  process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION &&
  process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION === "true"
);

const openApiMiddleware = (app: Application) => {
  app.use(
    process.env.OPENAPI_SPECIFICATION || "/spec",
    express.static(openApiSpecification)
  );
  app.use(
    openApiValidator.middleware({
      apiSpec: openApiSpecification,
      validateResponses: responseValidation,
      ignorePaths: /.*\/spec(\/|$)/,
    })
  );
};

export default openApiMiddleware;
