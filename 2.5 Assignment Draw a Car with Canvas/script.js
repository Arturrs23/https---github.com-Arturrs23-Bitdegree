//  target canvas it and set its context in your JavaScript file

const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

 

const drawCar = () => {

  ctx.save();

  ctx.translate(35, 260);

 

  // Draw the trunk of the car using fillRect. 

  ctx.fillRect(0, 30, 15, 15);

  //  draw the body of the car

  ctx.fillRect(15, 20, 25, 25);

  //Draw the window of the car

  ctx.fillStyle = 'white';

  ctx.fillRect(28, 23, 7, 7);

  ctx.fillStyle = 'black';

  // Draw the hood of car

  ctx.fillRect(40, 30, 30, 15);

  // Draw the wheels

  ctx.fillRect(7, 43, 10, 10);

  ctx.fillRect(37, 43, 10, 10);

  ctx.restore();

};

 

drawCar();