import { startExpressServer } from "./config/ExpressConf";
import { makeInjection } from "./config/Injection";

makeInjection()
startExpressServer(8080);