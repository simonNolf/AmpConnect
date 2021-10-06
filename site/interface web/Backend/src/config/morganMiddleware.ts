import chalk from 'chalk';
import morgan from 'morgan';
import logger from '../lib/logger';
import express from "express";

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

const loggerStream: morgan.StreamOptions = {
    write: (message) =>
        logger.http(message.substring(0, message.lastIndexOf('\n')))
}
morgan.token('params',(req:express.Request)=>JSON.stringify(req.params));
morgan.token('body',(req:express.Request)=>JSON.stringify(req.body));
const morganMiddleware = morgan(
    chalk.yellow(':method :url :status :res[content-length]- :response-time ms params :params body :body'),
    { stream: loggerStream, skip: () => !isDevelopment},
)

export default morganMiddleware;