// Arrow key codes
var UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37;

// rocket object
var rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};

var ufo = {
	img: document.querySelector("#ufo"),
	x: 100,
	y: 30,
	width: 100
};
var velocity = 2;

var torpedo = document.querySelector("#torpedo"),
    startBtn = document.querySelector("#start"),
    fireBtn = document.querySelector("#fire"),
    ufo = document.querySelector("#ufo");

// Initialize objects on the screen
render ( );

startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false)
window.addEventListener("keydown",keydownHandler,false);

function startGameHandler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.img.style.display = "block";
}

function fireTorpedoHandler( ) {
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 200)+ "px";
}

function keydownHandler(event) {
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
	if (event.keyCode == 87)   {
		ufo.x -= velocity;
	}

	render( );
}

function render( ) {
	// position objects on the screen
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
	//ufo.img.style.right = ufo.x + "px";
	//ufo.img.style.top = ufo.y + "px";
}