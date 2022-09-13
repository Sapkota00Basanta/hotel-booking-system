import Server from "./common/server";

const port = parseInt(process.env.BACKEND_PORT ?? "8080");
const hostIp = process.env.HOST_IP ?? "127.0.0.1";
const protocol = process.env.BACKEND_PROTOCOL ?? "http";
export default new Server().listener(protocol, port, hostIp);
