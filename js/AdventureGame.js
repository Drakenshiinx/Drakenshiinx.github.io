//Array to store locations on the map
var map = [];
map[0] = "The back patio.";
map[1] = "The backyard.";
map[2] = "The tool shed.";
map[3] = "The kitchen.";
map[4] = "The livingroom.";
map[5] = "The Bedroom";
//map[6] = "empty room";
//map[7] = "empty room";
//map[8] = "empty room";

//variable where the player will start
var mapLocation = 3;

//Array to store my images
var images = [];
images[0] = "backpatio1.jpg";
images[1] = "garden1.jpg";
images[2] = "toolshed1.png";
images[3] = "kitchen1.jpg";
images[4] = "livingroom1.jpg";
images[5] = "bedroom1.jpg";

//Array that stores blocked path messages
var blockedPath = [];
blockedPath[0] = "There is nothing over there.";
blockedPath[1] = "There is a very tall fence you cannot get over.";
blockedPath[2] = "You cannot go further.  You must turn back.";
blockedPath[3] = "A force stops you from going further.";
blockedPath[4] = "You cannot continue further.";
blockedPath[5] = "lol nope.";
//blockedPath[6] = "WIP";
//blockedPath[7] = "wIP";
//blockedPath[8] = "WIP";

//items array
var gameItems = ["key", "watch", "picture"];
//location of items
var itemLocations =[1, 4, 5];
//backpack array
var backpack = [];
//initialize the players input
var userInput = "";
//initialize the gameMessage
var gameMessage = "";

//create an array of actions the game will understand and a variable to store the current action
var actionsIKnow = ["north","east","south","west", "take", "use", "drop"];
//variable to store the current action
var action = "";

//an array of items the game understands
var itemsIKnow = ["key", "watch", "picture"];
//and a variable to store the current item
var item = "";
//the img element
var image = document.querySelector("img");
//the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");

//the button
var button = document.querySelector("button");

button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
//window.addEventListener("keydown", keydownHandler, false);





var gameMessage = "Welcome to a game where you explore some strangers home! ";
gameMessage += "To explore the home, you will want to use words north, south, east and west. <br>";
gameMessage += "If you come across an item, be sure to type the word take followed by the item name."





//display the players location
render();

function clickHandler()
{
	playGame();
}

function playGame()
{
	//get the players input and convert it to lowercase
	userInput = input.value;
	userInput = userInput.toLowerCase();
	
	//reset these variables from the previous turn
	gameMessage = "";
	action = "";
	
	//figure out the players action
	for(var i = 0; i < actionsIKnow.length; i++)
	{
		if(userInput.indexOf(actionsIKnow[i]) !== -1)
		{
			action = actionsIKnow[i];
			console.log("player's action: " + action);
			break;
		}
	}
	
	//figure out the item the player wants
	for (i = 0; i < itemsIKnow.length; i++)
	{
		if(userInput.indexOf(itemsIKnow[i]) !== -1)
		{
			item = itemsIKnow[i];
			console.log("Player's item: " + item);
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
			gameMessage = blockedPath[mapLocation];
		}
		break;
		
		case "east":
		if(mapLocation % 3 != 2)
		{
			mapLocation += 1;
		}
		else
		{
			gameMessage = blockedPath[mapLocation];
		}
		break;
		
		case "south":
		if (mapLocation < 6)
		{
			mapLocation += 3;
		}
		else
		{
			gameMessage = blockedPath[mapLocation];
		}
		break;
		
		case "west":
		if(mapLocation % 3 != 0)
		{
			mapLocation -= 1;
		}
		else
		{
			gameMessage = blockedPath[mapLocation];
		}
		break;
		
		case "take":
		takeItem();
		break;
		
		case "drop":
		dropItem();
		break;
		
		case "use":
		useItem();
		break;
		
		default:
		gameMessage ="This is not a valid option.";
	}
	
	//render the game
	render();
}

function takeItem()
{
	//find the index number of the item in the items array
	var itemIndexNumber = gameItems.indexOf(item);
	//does the item exist in the game world and is it at the players current location?
	if(itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation)
	{
		gameMessage = "You take the " + item + ".";
		//add the item to the players backpack
		backpack.push(item);
		
		//remove the item from the game world
		gameItems.splice(itemIndexNumber, 1);
		itemLocations.splice(itemIndexNumber, 1);
		
		//display in the console for testing
		console.log("World items: " + gameItems);
		console.log("backpack items: " + backpack);	
	}
	else
	{
		//message if the player tries to take an item that isn't in the current location
		gameMessage = "you can't do that.";
	}
}

function dropItem()
{
	//try to drop the item only if the backpack isn't empty
	if(backpack.length !== 0)
	{
		//find the tiem's array index number in the backpack
		var backpackIndexNumber = backpack.indexOf(item);
		//the item is in the backpack if the backpackIndexNumber isn't -1
		if(backpackIndexNumber !== -1)
		{
			//tell the player that the item has been dropped
			gameMessage = "You dropped the " + item + ".";
			
			//add the item from the backpack to the game world
			gameItems.push(backpack[backpackIndexNumber]);
			itemLocations.push(mapLocation);
			//remove the item from the player's backpack
			backpack.splice(backpackIndexNumber, 1);
		}
		else
		{
			//message if the player tries to drop something that is not in the backpack
			gameMessage = "You can't do that.";
		}
	}
	else
	{
		//message if the backpack is empty
		gameMessage = "You're not carrying anything.";
	}
}

function useItem()
{
	//find out if the item is in the backpack
	//find the item's array index number in the backpack
	var backpackIndexNumber = backpack.indexOf(item);
	//if the index number is -1, then it isn't in the backpack
	//tell the player that he or she isn't carrying it
	if(backpackIndexNumber === -1)
	{
		gameMessage = "You're not carrying any items.";
	}
	//if there are no items in teh backpack, then tell teh player the backpack is empty
	if(backpack.length === 0)
	{
		gameMessage += "Your backpack is empty";
	}
	
	//if the item is found in the backpack figure out what to do with the item
	if(backpackIndexNumber !== -1)
	{
		switch(item)
		{
			case "key":
			if(mapLocation === 2)
			{
				gameMessage = "You use the rusty key to open the chest in the tool shed";
			}
			else
			{
			gameMessage = "A rusty key sits in your hand";
			}
			break;
			
			case "watch":
			gameMessage = "You gently place the ancient pocket watch into your bag";
			break;

		
		case "picture":
			if(mapLocation === 5)
			{
				gameMessage = "You place the picture on the bed side table";
				//remove item from players backpack
				backpack.splice(backpackIndexNumber, 1);
			}
			else
			{
		gameMessage = "You find an old picture of someone's great grandparent.  It is usless to you, but you decide to keep it anyway.";
			}
		break;
		}
	}
}

function render()
	{
		//This renders the location
		output.innerHTML = map[mapLocation];
		image.src = "../images/" + images[mapLocation];
		
		//This will display an item if it happens to be in the players location
		for(var i = 0; i < gameItems.length; i++)
		{
			if(mapLocation === itemLocations[i])
			{
				output.innerHTML += "<br>You see a <strong>" + gameItems[i] + "</strong> here.";
			}
		}
			
		//This displays the game message
		output.innerHTML += "<br>" + gameMessage + "<br>";
		
		//This displays the contents in the backpack
		if(backpack.length !== 0)
		{
			output.innerHTML += "<br>You are carrying: " + backpack.join(", ");
		}
	}
