import { startExpressServer } from "./config/ExpressConf";
import { inject } from "./config/Injection";

inject();
startExpressServer(8080);