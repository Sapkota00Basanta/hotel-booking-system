import envConfig from "./common/dotenv";
import Server from "./common/server";

const port = parseInt(process.env.PORT ?? '8080');
const ipAddress = process.env.IP_ADDRESS ?? '127.0.0.1';
export default new Server().listener(port, ipAddress);