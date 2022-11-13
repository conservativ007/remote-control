"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusAndHistory = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
function statusAndHistory(data, duplex) {
    const mousePos = robotjs_1.default.getMousePos();
    data.startsWith("mouse_position") ?
        duplex.write(`${data} ${mousePos.x},${mousePos.y}\n`)
        :
            duplex.write(`${data}`);
}
exports.statusAndHistory = statusAndHistory;
