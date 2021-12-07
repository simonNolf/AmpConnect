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
let ioServer :Server

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
    jest.setTimeout(50000)
    test('should send stream', async (done) => {
        const stream = fs.createReadStream('ressources/testFiles/ff-16b-2c-44100hz.aac')
        const fname: String = "Test"
        ioServer.on('connection', (mySocket) => {
            expect(mySocket).toBeDefined();
        });
        socket.emit('incoming stream');
        socket.emit('newFile', fname, "File size");
        socket.once("newFileReceived", (filename) => {
            expect(filename).toBe(fname);
        })
        for await(let chunk of stream) {
            socket.emit('FileBuffer', chunk)
        }

        socket.on("FileBufferReceived", (message) => {
            expect(message).toBe("ok");
        })
        stream.on('end', () => {
            socket.emit('FileEnd')
        })
        stream.on("error", (err => Logger.error(err.stack)))
        socket.once("FileEndAk", (message) => {
            expect(message).toBe("ok");
            done();
        })
    });
});