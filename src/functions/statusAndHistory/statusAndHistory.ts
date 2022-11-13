import robot from 'robotjs';

export function statusAndHistory(data: string, duplex: any) {

  const mousePos = robot.getMousePos();

  data.startsWith("mouse_position") ?
    duplex.write(`${data} ${mousePos.x},${mousePos.y}\n`)
    :
    duplex.write(`${data}`);

}