"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./src/http_server/index.js");
const ws_1 = require("ws");
const choose_function_js_1 = require("./src/functions/choose_function/choose_function.js");
const HTTP_PORT = 3000;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
index_js_1.httpServer.listen(HTTP_PORT);
const startBack = () => {
    const wss = new ws_1.WebSocketServer({ port: 8080 });
    console.log("Websocket server has started at port 8080");
    wss.on("header", (headers) => {
        console.log(headers);
    });
    wss.on("connection", (ws) => __awaiter(void 0, void 0, void 0, function* () {
        const duplex = (0, ws_1.createWebSocketStream)(ws, {
            encoding: "utf-8",
            decodeStrings: false
        });
        console.log("New client connected \nData stream");
        duplex.on("data", data => (0, choose_function_js_1.choose_function)(data, duplex));
        ws.on("close", () => {
            console.log("ws closed");
            duplex.destroy();
        });
    }));
};
startBack();
