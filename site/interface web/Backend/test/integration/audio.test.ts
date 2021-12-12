import { io } from "socket.io-client";
import http from 'http';
import {Socket ,Server}  from 'socket.io';
import {AddressInfo} from "net";
import {server, ioServ} from "../../src/server";
import fs from "fs";
import Logger from "../../src/lib/logger";

let socket :Socket;
let httpServer :http.Server;
let httpServerAddress:String | AddressInfo;
let ioServer :Server;

/**
 * Setup WS & HTTP servers
 */
beforeAll((done) => {
    httpServer = server
    httpServerAddress = server.address()
    ioServer = ioServ
    done();
});

/**
 *  Cleanup WS & HTTP servers
 */
afterAll((done) => {
    ioServer.close();
    httpServer.close();
    done();
});

/**
 * Run before each test
 */
beforeEach((done) => {
    // Setup
    // Do not hardcode server port and address, square brackets are used for IPv6
    // @ts-ignore
    socket = io(`http://[${httpServerAddress.address}]:${httpServerAddress.port}`);
    socket.on('connect', () => {
        done();
    });
});

/**
 * Run after each test
 */
afterEach((done) => {
    // Cleanup
    if (socket.connected) {
        socket.disconnect();
    }
    done();
});


describe('audio commands', () => {
    it('should receive and play buffer throught web socket', function (done) {
        const buffer = fs.readFileSync('ressources/testFiles/ff-16b-2c-44100hz.aac')
        const fname: String = "Test"
        ioServer.on('connection', (mySocket) => {
            expect(mySocket).toBeDefined();
        });
        socket.emit("sending new buffer", buffer);
        socket.once("buffer recieved", (message) => {
            expect(message).toBe("ok");
            done();
        })
    });
    it('should receive and play file throught HTTP', function (done) {
        expect(false)
        done()
    });
    it('should receive and play buffer throught HTTP', function (done) {
        expect(false)
        done()
    });
});