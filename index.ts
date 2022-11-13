import Jimp from 'jimp';
import { httpServer } from './src/http_server/index.js';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { choose_function } from './src/functions/choose_function/choose_function.js';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const startBack = (): void => {
  const wss = new WebSocketServer({ port: 8080 });
  console.log("Websocket server has started at port 8080");

  wss.on("header", (headers) => {
    console.log(headers)
  })

  wss.on("connection", async (ws) => {

    const duplex = createWebSocketStream(ws, {
      encoding: "utf-8",
      decodeStrings: false
    });

    console.log("New client connected \nData stream");

    duplex.on("data", data => choose_function(data, duplex));

    ws.on("close", () => {
      console.log("ws closed");
      duplex.destroy();
    });

  });
}

startBack();


