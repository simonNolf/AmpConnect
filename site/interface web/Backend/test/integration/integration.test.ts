import http from "http";
import {AddressInfo} from "net";
import {server, ioServ} from "../../src/server";
var request = require('supertest');

let httpServer :http.Server;
let httpServerAddress:String | AddressInfo;

beforeAll((done) => {
  httpServer = server
  httpServerAddress = server.address()
  done();
});

/**
 *  Cleanup WS & HTTP servers
 */
afterAll((done) => {
  httpServer.close();
  done();
});


describe('test API /', function () {

  it('responds to / GET', function httpAudioPlay(done) {
      request(server)
          .get('/audio/play')
          .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/pause')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/forward')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/backward')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/time')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/audio/title')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendYoutubeSettings')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendDabSettings')
        .expect(201, done);
  });

  it('responds to / GET', function httpAudioPlay(done) {
    request(server)
        .get('/sendGeneralSettings')
        .expect(201, done);
  });

})
