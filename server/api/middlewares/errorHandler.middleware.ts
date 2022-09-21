import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../Types/error.model";

const errorHandler = (
  err: TypeError | CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Declaring a new variable to store as instance of Custom Error Object
  let customError = err;
  // Checking if err parameter exists on any prototype of Custom Error Class or Object
  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      "Sorry for the inconvinence!. It looks like there is an issue with server.",
      500,
      {}
    );
  }

  /* We are not going to use next function because it triggers unnecessary memory leaks */
  res.status((customError as CustomError).status).send(customError);
};

export default errorHandler;
