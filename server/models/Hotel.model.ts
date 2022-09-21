//User Defined Modules
import { HotelInterface } from "../Types/hotelSchema.model";

//Third party Modules
import Mongoose from "mongoose";

//Defing Schema for hotel
const HotelSchema = new Mongoose.Schema<HotelInterface>({
    name: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
})

//Creating and exporting a new schema under the name of hotel
export default Mongoose.model<HotelInterface>("Hotel", HotelSchema);