import {pipeline} from "stream";
import * as fs from "fs";
import Logger from "../src/lib/logger";

const request = require('supertest');
const {server} = require("../src/server")

describe('test API /', function () {

  it('responds to /audio/play GET', function httpAudioPlay(done) {
      request(server)
          .get('/audio/play')
          .expect(404, done);
  });

  it('responds to /audio/pause GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/pause')
        .expect(201, done);
  });

  it('responds to /audio/forward GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/forward')
        .expect(201, done);
  });

  it('responds to /audio/backward GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/backward')
        .expect(201, done);
  });

  it('responds to /audio/time GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/time')
        .expect(201, done);
  });

  it('responds to /audio/title GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/title')
        .expect(201, done);
  });

  it('responds to /sendYoutubeSettings GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendYoutubeSettings')
        .expect(201, done);
  });

  it('responds to /sendDabSettings GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendDabSettings')
        .expect(201, done);
  });

  it('responds to /sendGeneralSettings GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendGeneralSettings')
        .expect(201, done);
  });

})
describe("test API /audio",()=>{
  it('responds to /audio/play/stream', function (done) {
    request(server).post('/audio/play/stream')
    pipeline(fs.createReadStream('ressources/testFiles/mixkit-conference-audience-clapping-strongly-476.wav'),request,()=>{

      expect(200)
    })
  });
})
