const WIDTH = 900;
const HEGHT = 600;

var canvas = document.getElementById("game-zone");
var context = canvas.getContext("2d");
canvas.height = HEGHT;
canvas.width = WIDTH;
var base = new Image();
var bg = new Image();
var bird1 = new Image();

// base.src="images/base.png";
// bg.src="images/bg.png";
// bird1.src="images/chim1.png";

// context.drawImage(bg,0,0);
// context.drawImage(base,0,500);

// function drawBird(x,y){   
//     context.drawImage(bg,0,0);    
//     context.drawImage(bird1,x,y);
//     context.drawImage(base,0,500);
// }
var x=y=100;
var bird2 = new Image();
bird2.src="images/chim2.png";
var bird2Loaded = false;
bird2.onload = function(){
    bird2Loaded = true;
}
setInterval(function(){
 {
    context.drawImage(bird2,100,y);
    y+=3;
}
},30);

// var x=y=200;
// function run(){
//     drawBird(x,y);
//     y+=3;
//     requestAnimationFrame(run);
// }
// document.addEventListener("keydown",function(){y-=60;})
// run();
