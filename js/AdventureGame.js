//create the array
var map = [];

map[0] = "The back patio.";
map[1] = "The backyard.";
map[2] = "The tool shed.";

//set player start location
var mapLocation = 1;

//initialize the players input
var playersInput = "";

//initialize the gameMessage
var gameMessage = "";

//create an array of actions the game will understand and a variable to store the current action
var actionsIKnow = ["north","east","south","west"];
var action = "";

//the output and input fields
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
	for(i=0; i < actionsIKnow.length; i++)
	{
		if(playersInput.indexOf(actionsIKnow[i] !== -1)
		{
			action = actionsIknow[i];
			console.log("player's action: " + action);
			break;
		}
	}
	switch(action)
	{
		case "north":
		mapLocation -= 3;
		break;
		
		case "east""
		mapLocation += 1;
		break;
		
		case "south""
		mapLocation += 3;
		break;
		
		case "west""
		mapLocation -= 1;
		break;
		
		default:
		gameMessage ="I don't understand that.";		
	}
	render();
}


//display the players location
output.innerHTML = map[mapLocation];