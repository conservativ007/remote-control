import robot from 'robotjs';

export function drowCircle(radius: number): void {

  setTimeout(() => drowToCircle(radius), 2000);

  function drowToCircle(radius: number) {
    const mousePos = robot.getMousePos();
    for (let i = 0; i <= (Math.PI * 2) + 0.1; i += 0.1) {

      const x = mousePos.x + (radius * Math.cos(i)) - radius;
      const y = mousePos.y + (radius * Math.sin(i));

      robot.dragMouse(x, y);
    }
  }
}