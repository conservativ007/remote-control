import robot from 'robotjs';

export function drowSquare(radius: number): void {

  radius = radius * 4;
  const chunkOfRadius = radius / 4;

  setTimeout(() => getRectange(), 2000);

  function getRectange() {
    const mousePos = robot.getMousePos();
    for (let i = 1; i <= radius; i++) {
      if (i <= chunkOfRadius) {
        robot.dragMouse(mousePos.x - 0, mousePos.y -= 1);
      }

      else if (i >= chunkOfRadius && i <= chunkOfRadius * 2) {
        robot.dragMouse(mousePos.x -= 1, mousePos.y - 0);
      }

      else if (i >= chunkOfRadius * 2 && i <= chunkOfRadius * 3) {
        robot.dragMouse(mousePos.x - 0, mousePos.y += 1);
      }

      else if (i >= chunkOfRadius * 3) {
        robot.dragMouse(mousePos.x += 1, mousePos.y - 0);
      }
    }
  }
}