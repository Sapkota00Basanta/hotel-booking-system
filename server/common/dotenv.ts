// Build-In Modules
import path from "path";

//Third-party Modules
import dotenv from "dotenv";

//Defining environment Variable
const envConfig = dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

export default envConfig;