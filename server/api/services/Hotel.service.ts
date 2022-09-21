//User-Defined Modules
import logger from "../../common/logger";
import HotelModel from "../../models/Hotel.model";

//Third-party Modules
import {Request, Response} from "express";
import { resolvers } from "express-openapi-validator";

export class HotelService {
    // Get single hotel details from database
    async getHotelDetail() {
        try {
            
        } catch (error) {
            logger.error(error);
            return error;
        }
    }

    //Get all hotels details from database
    async getAllHotelsDetail() {
        try {
            
        } catch (error) {
            logger.error(error);
            return error;
        }
    }

    //Create a new hotel & add it to database
    async createNewHotel(_req:Request, _res:Response, _otherInfo: string = "No other information" ) {
        const newHotel = new HotelModel(_req.body);
        try {
            const savedHotel = await newHotel.save();
            logger.info(`New Hotel information saved in database`);
            return savedHotel;
        } catch (error) {
            logger.error(error);
            return error;
        }
    }
}

export default new HotelService();