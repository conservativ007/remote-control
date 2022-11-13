import robot from 'robotjs';

export class MouseMove {

  constructor(move: string, step: number) {
    this.getChoice(move, step);
  }

  mouse_up(step: number) {

    let pos = robot.getMousePos();
    robot.dragMouse(pos.x - 0, pos.y - step);
  }

  mouse_down(step: number) {
    let pos = robot.getMousePos();
    robot.dragMouse(pos.x - 0, pos.y + step);
  }
  mouse_right(step: number) {
    let pos = robot.getMousePos();
    robot.dragMouse(pos.x + step, pos.y - 0);
  }

  mouse_left(step: number) {
    let pos = robot.getMousePos();
    robot.dragMouse(pos.x - step, pos.y - 0);
  }

  getChoice(move: string, step: number) {
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