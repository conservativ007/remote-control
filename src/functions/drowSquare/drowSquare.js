"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drowSquare = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
function drowSquare(radius) {
    radius = radius * 4;
    const chunkOfRadius = radius / 4;
    setTimeout(() => getRectange(), 2000);
    function getRectange() {
        const mousePos = robotjs_1.default.getMousePos();
        for (let i = 1; i <= radius; i++) {
            if (i <= chunkOfRadius) {
                robotjs_1.default.dragMouse(mousePos.x - 0, mousePos.y -= 1);
            }
            else if (i >= chunkOfRadius && i <= chunkOfRadius * 2) {
                robotjs_1.default.dragMouse(mousePos.x -= 1, mousePos.y - 0);
            }
            else if (i >= chunkOfRadius * 2 && i <= chunkOfRadius * 3) {
                robotjs_1.default.dragMouse(mousePos.x - 0, mousePos.y += 1);
            }
            else if (i >= chunkOfRadius * 3) {
                robotjs_1.default.dragMouse(mousePos.x += 1, mousePos.y - 0);
            }
        }
    }
}
exports.drowSquare = drowSquare;
