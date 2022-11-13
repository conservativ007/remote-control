"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choose_function = void 0;
const mouseMove_1 = require("../mouseMove/mouseMove");
const drowCircle_js_1 = require("../drowCircle/drowCircle.js");
const drowSquare_js_1 = require("../drowSquare/drowSquare.js");
const drowRectangular_js_1 = require("../drowRectangular/drowRectangular.js");
const statusAndHistory_1 = require("../statusAndHistory/statusAndHistory");
function choose_function(data, duplex) {
    const move = data.split(" ")[0];
    const step = Number(data.split(" ")[1]);
    const stepTwo = Number(data.split(" ")[2]);
    if (move.startsWith("mouse")) {
        new mouseMove_1.MouseMove(move, step);
    }
    if (move === "draw_circle") {
        // There will be a delay of two seconds 
        (0, drowCircle_js_1.drowCircle)(step);
    }
    if (move === "draw_square") {
        // There will be a delay of two seconds 
        (0, drowSquare_js_1.drowSquare)(step);
    }
    if (move === "draw_rectangle") {
        // There will be a delay of two seconds 
        (0, drowRectangular_js_1.drowRectangular)(step, stepTwo);
    }
    (0, statusAndHistory_1.statusAndHistory)(data, duplex);
}
exports.choose_function = choose_function;
