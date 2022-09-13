// Third-party Modules
import mongoose from "mongoose";
import logger from "./logger";

// Mongoose Module to connect to db
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB ?? '');
    logger.info(`Connection to MongoDB is sucessfull!`);
  } catch (error) {
    throw error;
  }
};

//Checking whether DBConnection is stable 
mongoose.connection.on(`disconnected`, () => {
  logger.warn(`Database Connection is disconnected!`);
});

//Currently this functionality is not needed!
// mongoose.connection.on(`connected`, () => {
//   logger.warn(`Database Connection is Succefull!`);
// });

export default dbConnection;