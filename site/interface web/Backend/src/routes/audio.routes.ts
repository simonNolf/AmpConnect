import {Router} from "express";
import Logger from "../lib/logger";
import * as service from '../service/audio.service'
import {formidable} from "formidable";
// @ts-ignore
import fs from "fs";

const AudioPlayerRouter:Router = Router()
AudioPlayerRouter.post("/buffer",async (req,res)=>{
    service.playBuffer(req.body.buffer).then(()=>{
        res.sendStatus(200)
    }).catch(err => Logger.error(err))
})

AudioPlayerRouter.post('/stream',async (req, res) => {
    service.playStream(req).catch((err: Error) =>{Logger.error(err)})//TODO: extract stream from request
    res.status(400).json({
        message:"STREAMING NOT IMPLEMENTED"
    })
})

AudioPlayerRouter.post('/file',async (req,res)=>{
    const form = formidable()
    form.parse(req,async (err, fields, files) =>{
        if (err) throw err
        // @ts-ignore
        const oldPath = files.sound.filepath
        res.status(200).json({
            message:"Audio playing has started"
        })
        service.playFile(oldPath).then(()=>fs.unlinkSync(oldPath)).catch(err=>{Logger.error(err)})
    })
})

const AudioControlRouter:Router = Router()

AudioControlRouter.get("/pause", (req, res) => {
    service.pause()
    res.status(200).json({
        message: ' PAUSE '
    });
});
AudioControlRouter.get("/resume", (req, res) => {
    service.resume()
    res.status(200).json({
        message: ' RESUME'
    });
});

AudioControlRouter.get("/forward", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
        message: ' FORWARD '
    });
});

AudioControlRouter.get("/backward", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
        message: ' BACKWARD '
    });
});

AudioControlRouter.get("/title", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
        message: ' TITLE '
    });
});

AudioControlRouter.get("/time", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
        message: ' TIME '
    });
});

export const AudioRouter:Router = Router()

AudioRouter.use("/play",AudioPlayerRouter)
AudioRouter.use("/",AudioControlRouter)

