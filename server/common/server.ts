//Build-in Moduless

//User-defined Modules
import initialMiddlewares from '../Middlewares/initial.middleware';

//Third-party Modules
import express from "express";
import logger from "./logger";
import { Application } from "express-serve-static-core";

// Initializing an express server
const app = express();

export default class ExpressServer {
    constructor() {
        app.use()
        //Definig static values
        app.use(express.static())
    }

    //Method for listening requests to server
    listener(port:number, ipAddress:string ): Application  {
        const serverListener = (p:number, ip: string): void => {

        }
    }
}
