//create the array
var map = [];

map[0] = "The back patio.";
map[1] = "The backyard.";
map[2] = "The tool shed.";
map[3] = "The kitchen.";
map[4] = "The livingroom.";
map[5] = "The Bedroom";
//set player start location

var images = [];
images[0] = "backpatio1.jpg";
images[1] = "garden1.jpg";
images[2] = "toolshed1.png";
images[3] = "kitchen1.jpg";
images[4] = "livingroom1.jpg";
images[5] = "bedroom1.jpg";
var mapLocation = 1;

var gameMessage = "Welcome to a game where you explore some strangers home!"
gameMessage += "To explore the home, you will want to use words north, south, east and west."

//initialize the players input
var playersInput = "";

//initialize the gameMessage
var gameMessage = "";

//create an array of actions the game will understand and a variable to store the current action
var actionsIKnow = ["north","east","south","west"];
var action = "";

//the output, input and image fields
var image = document.querySelector("img");
var output = document.querySelector("#output");
var input = document.querySelector("#input");

//the button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//display the players location
render();

function clickHandler()
{
	playGame();
}

function playGame()
{
	//get the players input and convert it to lowercase
	playersInput = input.value;
	playersInput = playersInput.toLowerCase();
	
	//reset these variables from the previous turn
	gameMessage = "";
	action = "";
	
	//figure out the players action
	for(var i=0; i < actionsIKnow.length; i++)
	{
		if(playersInput.indexOf(actionsIKnow[i]) !== -1)
		{
			action = actionsIKnow[i];
			console.log("player's action: " + action);
			break;
		}
	}
	//choose the correct action
	switch(action)
	{
		case "north":
		mapLocation -= 3;
		break;
		
		case "east":
		mapLocation += 1;
		break;
		
		case "south":
		mapLocation += 3;
		break;
		
		case "west":
		mapLocation -= 1;
		break;
		
		default:
		gameMessage ="I don't understand that.";
	}
	render();
}
function render()
	{
		//render the location
		output.innerHTML = map[mapLocation];
		image.src = "../images/" + images[mapLocation];
			
		//display the game message
		output.innerHTML += "<br><em>" + gameMessage + "</em>";
	}

//display the players location
output.innerHTML = map[mapLocation];