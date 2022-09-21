// Build in Modules
import { application, Application } from "express";

// User Defined Modules
import hotelRouter from "./api/controllers/hotels/routes";

// Routes Function to handle routes from controller
const routes = (_app:Application):void => {
    //Hotel Controller Router
    _app.use('/api/v1/hotel',hotelRouter);
} 

export default routes;