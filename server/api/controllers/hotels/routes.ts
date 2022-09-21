//Third Party Modules
import express from "express";

//User Defined Modules
import hotelsController from "./hotels.controller";

//Defining routes for hotels controller
export default express.Router().post('/', hotelsController.getHotel);