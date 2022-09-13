// Third-party Modules
import { Request, Response, NextFunction } from "express";

const allowCrossDomain = (_req: Request, res: Response, next: NextFunction) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `*`);
    res.header(
      `Access-Control-Allow-Methods`,
      `GET, POST, PUT, PATCH, OPTIONS, DELETE`
    );
    next();
};

export default allowCrossDomain;