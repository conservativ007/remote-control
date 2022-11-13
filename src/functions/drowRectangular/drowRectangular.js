"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drowRectangular = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
function drowRectangular(x, y) {
    let left = x;
    let top = y;
    let result = (left + top) * 2;
    setTimeout(() => getRectangular(), 2000);
    function getRectangular() {
        const mousePos = robotjs_1.default.getMousePos();
        for (let i = 1; i <= result; i++) {
            if (i <= left) {
                robotjs_1.default.dragMouse(mousePos.x - 0, mousePos.y -= 1);
            }
            else if (i >= left && i <= left + top) {
                robotjs_1.default.dragMouse(mousePos.x += 1, mousePos.y - 0);
            }
            else if (i >= left + top && i <= (left * 2) + top) {
                robotjs_1.default.dragMouse(mousePos.x - 0, mousePos.y += 1);
            }
            else if (i >= (left * 2) + top && i <= (left + top) * 2) {
                robotjs_1.default.dragMouse(mousePos.x -= 1, mousePos.y - 0);
            }
        }
    }
}
exports.drowRectangular = drowRectangular;
