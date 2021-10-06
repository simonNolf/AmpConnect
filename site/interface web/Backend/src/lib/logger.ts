import winston from 'winston'

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
    error: 0,
    warning: 1,
    info: 2,
    http: 3,
    debug: 4,
}

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
    error: 'red',
    warning: 'yellow',
    info: 'green',
    http: 'blue',
    debug: 'magenta',
}

// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors)

// Chose the aspect of your log customizing the log format.
const formatc = winston.format.combine(
    // Add the message timestamp with the preferred format
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // Tell Winston that the logs must be colored
    winston.format.colorize({ all: true }),
    // Define the format of the message showing the timestamp, the level and the message
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
)
const formatf = winston.format.combine(
    // Add the message timestamp with the preferred format
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // Define the format of the message showing the timestamp, the level and the message
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
)

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const transports = [
    // Allow the use the console to print the messages
    new winston.transports.Console({ format:formatc }),
    // Allow to print all the error level messages inside the error.log file
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format:formatf
    }),
    new winston.transports.File({
        filename: 'logs/warning.log',
        level: 'warning',
        format:formatf
    }),
    new winston.transports.File({
        filename: 'logs/debug.log',
        level: 'debug',
        format:formatf
    }),
    new winston.transports.File({
        filename: 'logs/info.log',
        level: 'info',
        format:formatf
    }),
    new winston.transports.File({
        filename: 'logs/http.log',
        level: 'http',
        format:formatf
    }),
]

// Create the logger instance that has to be exported
// and used to log messages.
const Logger = winston.createLogger({
    level: level(),
    levels,
    transports,
})

export default Logger