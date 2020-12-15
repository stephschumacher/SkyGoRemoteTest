const clc = require("cli-color");

const emoji = {
  info: "🔹",
  warning: "🔸",
  error: "🔺",
  debug: "👻",
  success: "✓",
  timing: "⏱"
};


export enum LogType {
  Info,
  Warning,
  Error,
  Debug,
  Success,
  Timing
}

/////////////
// log
// Print the formatted string out onto the console
// message = the string to print
// type = the type of message, default to info
/////////////
export function log(message: string, type?: LogType) {
  switch (type) {
    case LogType.Warning:
        console.log(emoji.warning + " " + clc.yellow(message));
      break;
    case LogType.Error:
        console.log(emoji.error + clc.red(" ERROR ") + clc.yellow(message));
      break;
    case LogType.Debug:
      console.log(emoji.debug + " " + clc.yellow(message));
      break;
    case LogType.Success:
        console.log(" " + clc.green(emoji.success) + " " + clc.green(message));
      break;    
    case LogType.Timing:
        console.log(" " + clc.cyan(emoji.timing) + " " + clc.cyan(message + " seconds"));
      break;
    default:
        console.log(emoji.info + " " + clc.yellow(message));
  }
}


