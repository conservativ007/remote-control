import { MouseMove } from "../mouseMove/mouseMove";
import { drowCircle } from '../drowCircle/drowCircle.js';
import { drowSquare } from '../drowSquare/drowSquare.js';
import { drowRectangular } from '../drowRectangular/drowRectangular.js';
import { statusAndHistory } from "../statusAndHistory/statusAndHistory";

export function choose_function(data: string, duplex: any) {
  const move: string = data.split(" ")[0];
  const step: number = Number(data.split(" ")[1]);
  const stepTwo: number = Number(data.split(" ")[2]);

  if (move.startsWith("mouse")) {
    new MouseMove(move, step);
  }

  if (move === "draw_circle") {
    // There will be a delay of two seconds 
    drowCircle(step);
  }

  if (move === "draw_square") {
    // There will be a delay of two seconds 
    drowSquare(step);
  }

  if (move === "draw_rectangle") {
    // There will be a delay of two seconds 
    drowRectangular(step, stepTwo);
  }

  statusAndHistory(data, duplex);
}