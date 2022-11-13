"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseMove = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
class MouseMove {
    constructor(move, step) {
        this.getChoice(move, step);
    }
    mouse_up(step) {
        let pos = robotjs_1.default.getMousePos();
        robotjs_1.default.dragMouse(pos.x - 0, pos.y - step);
    }
    mouse_down(step) {
        let pos = robotjs_1.default.getMousePos();
        robotjs_1.default.dragMouse(pos.x - 0, pos.y + step);
    }
    mouse_right(step) {
        let pos = robotjs_1.default.getMousePos();
        robotjs_1.default.dragMouse(pos.x + step, pos.y - 0);
    }
    mouse_left(step) {
        let pos = robotjs_1.default.getMousePos();
        robotjs_1.default.dragMouse(pos.x - step, pos.y - 0);
    }
    getChoice(move, step) {
        if (move === "mouse_up") {
            return this.mouse_up(step);
        }
        if (move === "mouse_down") {
            return this.mouse_down(step);
        }
        if (move === "mouse_right") {
            return this.mouse_right(step);
        }
        if (move === "mouse_left") {
            return this.mouse_left(step);
        }
    }
}
exports.MouseMove = MouseMove;
