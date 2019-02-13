//create the array
var map = [];

map[0] = "The back patio.";
map[1] = "The backyard.";
map[2] = "The tool shed.";
map[3] = "The kitchen.";
map[4] = "The livingroom.";
map[5] = "The Bedroom";
map[6] = "empty room";
map[7] = "empty room";
map[8] = "empty room";
//set player start location

var images = [];
images[0] = "backpatio1.jpg";
images[1] = "garden1.jpg";
images[2] = "toolshed1.png";
images[3] = "kitchen1.jpg";
images[4] = "livingroom1.jpg";
images[5] = "bedroom1.jpg";

var blockedPathMessages = [];
blockedPathMessages[0] = "There is nothing over there.";
blockedPathMessages[1] = "There is a very tall fence you cannot get over.";
blockedPathMessages[2] = "You cannot go further.  You must turn back.";
blockedPathMessages[3] = "A force stops you from going further.";
blockedPathMessages[4] = "You cannot continue further.";
blockedPathMessages[5] = "lol nope.";
blockedPathMessages[6] = "WIP";
blockedPathMessages[7] = "wIP";
blockedPathMessages[8] = "WIP";


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
		if(mapLocation >= 3)
		{
		mapLocation -= 3;
		}
		else
		{
			gameMessage = blockedPathMessages[mapLocation];
		}
		break;
		
		case "east":
		if(mapLocation % 3 != 2)
		{
		mapLocation += 1;
		}
		else
		{
			gameMessage = blockedPathMessages[mapLocation];
		}
		break;
		
		case "south":
		if (mapLocation < 6)
		{
		mapLocation += 3;
		}
		else
		{
			gameMessage = blockedPathMessages[mapLocation];
		}
		break;
		
		case "west":
		if(mapLocation % != 0)
		{
		mapLocation -= 1;
		}
		else
		{
			gameMessage = blockedPathMessages[mapLocation];
		}
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