export type LogInfo = (data: string) => void;
export type LogWarn = (data: string) => void;
export type LogError = (data: string) => void;

export interface AppLogger {
    info: LogInfo
    warn: LogWarn
    error: LogError
}

export class LoggerImpl implements AppLogger {
    info = (data: string) => {
        console.log("info : " + data)
    };
    warn = (data: string) => {
        console.log("warn : " + data)
    };
    error = (data: string) => {
        console.log("error : " + data)
    };

}