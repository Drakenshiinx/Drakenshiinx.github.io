"use strict";
// Arrow key codes
var UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37,
	W = 87,
	Z = 90;

// rocket object
var rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};

//ufo object
var ufo = {
	img: document.querySelector("#ufo"),
	x: 490,
	y: 75,
	width: 100
};

var sounds = [
"#LaserBlast"
];
var velocity = 2;

var torpedo = document.querySelector("#torpedo"),
    startBtn = document.querySelector("#start"),
    fireBtn = document.querySelector("#fire");
    //ufo = document.querySelector("#ufo");

// Initialize objects on the screen
render ( );

startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false)
window.addEventListener("keydown",keydownHandler,false);

var currentSound = null;

function startGameHandler( ) {
	"use strict";
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.img.style.display = "block";
}

function fireTorpedoHandler( ) {
	"use strict";
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 200)+ "px";
	currentSound = document.querySelector(sounds);
	currentSound.play();
	
}

function keydownHandler(event) {
	"use strict";
	// handle user keyboard input

	if (event.keyCode == UP) {
		rocket.y -= velocity;
	}
	if (event.keyCode == LEFT) {
		rocket.x -= velocity;
	}
	if (event.keyCode === DOWN) {
		rocket.y += velocity;
	}
	if (event.keyCode == RIGHT) {
		rocket.x += velocity;
	}
	if (event.keyCode == W)   {
		ufo.y -= velocity;
	}
	if (event.keyCode == Z)   {
		ufo.y += velocity;
	}

	render( );
}

function render( ) {
	"use strict";
	// position objects on the screen
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
	ufo.img.style.right = ufo.x + "px";
	ufo.img.style.top = ufo.y + "px";
}