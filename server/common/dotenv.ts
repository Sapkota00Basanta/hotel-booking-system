// Build-In Modules
import path from "path";

// User Defined Modules
import rootDir from "./rootPath";

//Third-party Modules
import dotenv from "dotenv";

//Defining environment Variable
const envConfig = dotenv.config({
    path: path.join(`${rootDir}`, '/.env')
})

export default envConfig;