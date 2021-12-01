import {Router} from "express";
import * as service from '../service/player.service'
import {formidable} from "formidable";
// @ts-ignore
import mv from 'mv';
import fs from "fs";
import Logger from "../lib/logger";

export const AudioPlayerRouter:Router = Router()
AudioPlayerRouter.post("/player/play/buffer",async (req,res)=>{
    service.playBuffer(req.body.buffer).then(()=>{
        res.sendStatus(200)
    }).catch(err => Logger.error(err))
})
AudioPlayerRouter.post('/player/play/stream')

AudioPlayerRouter.post('/player/play/file',async (req,res)=>{
    const form = formidable()
    form.parse(req,async (err, fields, files) =>{
        if (err) throw err
        // @ts-ignore
        const oldPath = files.sound.filepath
        // @ts-ignore
        res.sendStatus(200)
        service.playFile(oldPath).then(()=>fs.unlinkSync(oldPath))

    })

})

