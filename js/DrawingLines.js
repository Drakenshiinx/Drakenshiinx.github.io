var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

// save previous display state
ctx.save();

// creates the circular sign
ctx.beginPath();
ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.strokeStyle = "red";
ctx.arc(200, 200, 145, 0, Math.PI * 2, true);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
ctx.stroke();	

//white line
ctx.beginPath();
ctx.strokeStyle  = "white";
ctx.lineWidth = 25;
ctx.moveTo(70, 200);
ctx.lineTo(330, 200);
ctx.stroke();

// draw DO NOT text
ctx.fillStyle  = "white";
ctx.font = "bold 50px Arial";
ctx.fillText( "DO NOT" ,100, 155);

//draw ENTER text
ctx.fillStyle  = "white";
ctx.font = "bold 50px Arial";
ctx.fillText( "ENTER" ,110, 280);

// restore previous display state
ctx.restore();		