//Third-party Modules
import pino from "pino";

//Using Pretty JSON logger
const logger = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_TYPE ? process.env.LOG_TYPE : "info",
});

export default logger;