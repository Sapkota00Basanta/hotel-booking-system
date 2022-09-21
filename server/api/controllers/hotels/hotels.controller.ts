//Third Party Modules
import { Request, Response } from 'express';

//User Defined Modules
import logger from "../../../common/logger";
import HotelService from '../../services/Hotel.service';

//Defining Hotels Controller

export class HotelController {
    //Get Single Hotel Detail
    async getHotel(req: Request, res: Response) {
        try{
            //Send Database service response as status
            const savedHotelData = await HotelService.createNewHotel(req, res);
            logger.info(`New Hotel added in database!`);
            res.sendStatus(200).json(savedHotelData);
        } catch(error) {
            logger.error(`Error while inserting new hotel information`);
            res.sendStatus(500).json(error);
        }
    }
}

export default new HotelController();