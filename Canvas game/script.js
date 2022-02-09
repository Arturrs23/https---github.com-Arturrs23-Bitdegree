// Canvas game

 

"use strict";

const canvas = document.querySelector('#grid');

const ctx = canvas.getContext("2d");

const position = {x:0, y:0};

 

function setup(){

for (let i = 0; i < canvas.width; i +=20){

    

    ctx.moveTo(i,0);

 ctx.lineTo(i,canvas.height);

    

 ctx.moveTo(i,0);

    ctx.lineTo(i,canvas.width);

    

    ctx.strokeStyle="#f0f0f0";

    ctx.stroke();

}




function draw(){

    ctx.clearRect(0,0, canvas.width,canvas.height );

    setup()

    ctx.rect(position.x, position.y, 20,20)

    ctx.fill()

}

document.addEventListener('keydown', function(event){

 

    const {key} = event;

    if(key === "ArrowDown"){

        position.y += 20;

        draw()

    }

    if(key === "ArrowRight"){

        position.x += 20;

        draw()

    }

    if(key === "ArrowLeft"){

        position.x -= 20;

        draw()

    }

    if(key === "ArrowUp"){

        position.y -= 20;

        draw()

    }

});

 

setup();

draw();