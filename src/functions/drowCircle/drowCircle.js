"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drowCircle = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
function drowCircle(radius) {
    setTimeout(() => drowToCircle(radius), 2000);
    function drowToCircle(radius) {
        const mousePos = robotjs_1.default.getMousePos();
        for (let i = 0; i <= (Math.PI * 2) + 0.1; i += 0.1) {
            const x = mousePos.x + (radius * Math.cos(i)) - radius;
            const y = mousePos.y + (radius * Math.sin(i));
            robotjs_1.default.dragMouse(x, y);
        }
    }
}
exports.drowCircle = drowCircle;
