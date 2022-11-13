import robot from 'robotjs';

export function drowRectangular(x: number, y: number): void {

  let left = x;
  let top = y;

  let result = (left + top) * 2;

  setTimeout(() => getRectangular(), 2000);

  function getRectangular() {

    const mousePos = robot.getMousePos();

    for (let i = 1; i <= result; i++) {
      if (i <= left) {
        robot.dragMouse(mousePos.x - 0, mousePos.y -= 1);
      }

      else if (i >= left && i <= left + top) {
        robot.dragMouse(mousePos.x += 1, mousePos.y - 0);
      }

      else if (i >= left + top && i <= (left * 2) + top) {
        robot.dragMouse(mousePos.x - 0, mousePos.y += 1);
      }

      else if (i >= (left * 2) + top && i <= (left + top) * 2) {
        robot.dragMouse(mousePos.x -= 1, mousePos.y - 0);
      }
    }
  }
}