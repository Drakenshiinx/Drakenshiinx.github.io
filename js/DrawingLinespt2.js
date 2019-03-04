var canvasElement = document.querySelector("#myCanvas");
var ctx = canvasElement.getContext("2d");
 
 // save previous display state
ctx.save();
 
// this creates the triangle shape
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(200, 400);
ctx.lineTo(400, 400);
ctx.closePath();
 
// the outline of the triangle
ctx.lineWidth = 35;
ctx.lineJoin = "round";
ctx.strokeStyle = 'red';
ctx.stroke();
 
// the fill color of the triangle
ctx.fillStyle = "white";
ctx.fill();

//the straight line in the triangle
ctx.beginPath();
ctx.strokeStyle  = "black";
ctx.lineWidth = 20;
ctx.translate(67,20);
ctx.moveTo(250,250);
ctx.lineTo(250, 370);
ctx.stroke();

//the bendy line in the triangle
ctx.beginPath();
ctx.strokeStyle  = "black";
ctx.lineWidth = 20;
ctx.translate(-35,0);
ctx.moveTo(250,250);
ctx.lineTo(250, 290);
ctx.lineTo(225, 320);
ctx.lineTo(225, 370);
ctx.stroke();

// restore previous display state
ctx.restore();		