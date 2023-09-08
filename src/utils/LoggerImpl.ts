import { AppLogger } from "../domain/utils/Logger"

export class LoggerImpl implements AppLogger {
    info = (data: string) => {
        console.log("info : " + data)
    };
    warn = (data: string) => {
        console.warn("info : " + data)
    };
    error = (data: string) => {
        console.error("info : " + data)
    };

}