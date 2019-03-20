//variable for the enter key
const ENTER = 13;

//created a variable for my last save state button
let lastBtn = document.getElementById("lastSession");
lastBtn.addEventListener("click", lastPlace, "false");

let saveBtn = document.getElementById("saveGame");
saveBtn.addEventListener("click", savedGame, "false");

var startBtn = document.getElementById("startButton");
startBtn.addEventListener("click", render, "false");

//Array to store locations on the map
let map = [];
map[0] = "You step outside and onto the patio.<br>";
map[1] = "While walking outside, you enter the backyard.<br>";
map[2] = "You decide to walk towards the toolshed and enter inside.<br>";
map[3] = "You have entered the kitchen.<br>";
map[4] = "You enter the livingroom.<br>";
map[5] = "You enter the bedroom.<br>";
map[6] = "The followed the stairs that entered the basement.<br>";
map[7] = "You have entered the Game Room. <br>";
map[8] = "You have entered the kids bedroom. <br>";

//variable where the player will start
let mapLocation = 0;

//help messages array
let helpMessages = [];
helpMessages[0] = "<i>It seems a little dark by the patio.  If only we had something to light the area with... </i>";
helpMessages[1] = "<i>There is a slightly rusted key laying in the middle of the yard. </i>";
helpMessages[2] = "<i>You spot a locked chest in the shed.  Perhaps you can use something to unlock it.</i>";
helpMessages[3] = "<i>You notice there is cheese in the fridge.  Perhaps this may be useful.</i>";
helpMessages[4] = "<i>There is nothing of interest here. </i>";
helpMessages[5] = "<i> You notice a broken picture frame with the picture missing. </i>";
helpMessages[6] = "<i> A small mouse skitters across the room with something in its mouth.  Maybe you can lure it out. </i>";
helpMessages[7] = "<i> Insert Message Here for Gameroom. </i>";
helpMessages[8] = "<i> Insert message here for kids bedroom. </i>";

//Array to store my images
let images = [];
images[0] = "backpatio1.jpg";
images[1] = "garden1.jpg";
images[2] = "toolshed1.png";
images[3] = "kitchen1.jpg";
images[4] = "livingroom1.jpg";
images[5] = "bedroom1.jpg";
images[6] = "basement.jpg";
images[7] = "gameroom1.jpg";
images[8] = "kidsbedroom1.jpg";

//Array that stores blocked path messages
let blockedPath = [];
blockedPath[0] = "<i>There is nothing of interest over there.</i>";
blockedPath[1] = "<i>There is a very tall fence you cannot get over.</i>";
blockedPath[2] = "<i>This is a dead end.  You must turn back.</i>";
blockedPath[3] = "<i>You are a living being and are unable to phase through walls.</i>";
blockedPath[4] = "<i>You cannot continue further.</i>";
blockedPath[5] = "<i>lol nope.</i>";
blockedPath[6] = "<i>The deer head mounted on the wall stares into your soul preventing" + " you from going in that direction.</i>";
blockedPath[7] = "<i>Enter a blocked path message for the game room.</i>";
blockedPath[8] = "<i>Enter a blocked path message for the kids bedroom.</i>";

//items array
let gameItems = ["key", "cheese", "toy"];

//location of items
let itemLocations = [1, 3, 7];

//backpack array
let backpack = [];

//initialize the players input
let userInput = "";

//an array of actions you will type in the text box
let actionsIKnow = ["north", "east", "south", "west", "take", "use", "drop", "help", "instructions"];

//variable to store the current action
let action = "";

//an array of items you will type in the text box along with the actions
let itemsIKnow = ["key", "candle", "picture", "cheese", "toy"];

//and a variable to store the current item
let item = "";

//the img element
let image = document.querySelector("img");

//the input and output fields
let output = document.querySelector("#output");
let input = document.querySelector("#input");

//function that will bring the player to the last position they left off at
function lastPlace() {
  let x = localStorage.getItem("playerPosition");
  console.log("saved map location " + x);
  output.innerHTML = map[x];
  image.src = "../images/" + images[x];
  
}

function savedGame() {
localStorage.setItem("playerPosition", mapLocation);
alert("you saved your game at " + mapLocation);
}

//sound effect function for when player opens chest with key
function chestOpen(){
	let chestOpening = document.getElementById("Chest");
	chestOpening.play();
}

//variable for the game message on the display
let gameMessage = "";

//the buttons and mouse click event listeners
let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keydownHandler, false);

//display the players location
//render();

//allows the user to hit enter
function keydownHandler(event) {
  if (event.keyCode === ENTER) {
    playGame();
  }
}

//function for mouse click handler
function clickHandler() {
  playGame();
}

//this function is for playing the game
function playGame() {
	//"use strict";
  //get the players input and converts it to lowercase
let i; 

 userInput = input.value;
  userInput = userInput.toLowerCase();

  //resets the variables from the previous turn
  gameMessage = "";
  action = "";

  //figure out the players action
  for (i = 0; i < actionsIKnow.length; i+=1) {
    if (userInput.indexOf(actionsIKnow[i]) !== -1) {
      action = actionsIKnow[i];
      console.log("player's action: " + action);
      break;
    }
  }

  //figure out the item the player wants
  for (i = 0; i < itemsIKnow.length; i+=1) {
    if (userInput.indexOf(itemsIKnow[i]) !== -1) {
      item = itemsIKnow[i];
      console.log("Player's item: " + item);
    }
  }

  //choose the correct action
  switch (action) {
    //move north command
    case "north":
      if (mapLocation >= 3) {
        mapLocation -= 3;
        //localStorage.setItem("playerPosition", mapLocation);
        console.log(mapLocation);
      } 
	  else {
        gameMessage = blockedPath[mapLocation];
      }
      break;

    //move east command
    case "east":
      if (mapLocation % 3 != 2) {
        mapLocation += 1;
        //localStorage.setItem("playerPosition", mapLocation);
        console.log(mapLocation);
      } 
	  else {
        gameMessage = blockedPath[mapLocation];
      }
      break;

    //move south command
    case "south":
      if (mapLocation < 6) {
        mapLocation += 3;
        //localStorage.setItem("playerPosition", mapLocation);
        console.log(mapLocation);
      } 
	  else {
        gameMessage = blockedPath[mapLocation];
      }
      break;

    //move west command
    case "west":
      if (mapLocation % 3 != 0) {
        mapLocation -= 1;
        //localStorage.setItem("playerPosition", mapLocation);
        console.log(mapLocation);
      } 
	  else {
        gameMessage = blockedPath[mapLocation];
      }
      break;

    //take command
    case "take":
      takeItem();
      break;

    //drop command
    case "drop":
      dropItem();
      break;

    //use command
    case "use":
      useItem();
      break;

    //help command
    case "help":
      if (helpMessages[mapLocation] !== "") {
        gameMessage = helpMessages[mapLocation] + " ";
        gameMessage += "<b><br><i>Type instructions if you need game instructions. </i></b>";
      }
      break;

    //instructions command
    case "instructions":
      gameMessage = "<i>To explore the home, you will want to use words north, south, east and west. <br></i>";
      gameMessage += "<i>If you come across an item, be sure to type the word take followed by the item name.</i>";
      break;

    default:
      gameMessage = "This is not a valid option.";
  }

  //render the game
  render();
}

function takeItem() {
  //find the index number of the item in the items array
  let itemIndexNumber = gameItems.indexOf(item);
  //does the item exist in the game world and is it at the players current location?
  if (itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation) {
    gameMessage = "You take the " + item + " and place it into your backpack.";
    //add the item to the players backpack
    backpack.push(item);

    //remove the item from the game world
    gameItems.splice(itemIndexNumber, 1);
    itemLocations.splice(itemIndexNumber, 1);
    console.log(itemIndexNumber);
    console.log(item);

    //display in the console for testing
    console.log("World items: " + gameItems);
    console.log("backpack items: " + backpack);
  } 
  else {
    //message if the player tries to take an item that isn't in the current location
    gameMessage = "you can't do that.";
  }
}

//drop item function
function dropItem() {
  //try to drop the item only if the backpack isn't empty
  if (backpack.length !== 0) {
    //find the item's array index number in the backpack
    let backpackIndexNumber = backpack.indexOf(item);
    //the item is in the backpack if the backpackIndexNumber isn't -1
    if (backpackIndexNumber !== -1) {
      //tell the player that the item has been dropped
      gameMessage = "You dropped the " + item + ".";

      //add the item from the backpack to the game world
      gameItems.push(backpack[backpackIndexNumber]);
      itemLocations.push(mapLocation);
      //remove the item from the player's backpack
      backpack.splice(backpackIndexNumber, 1);
    } 
	else {
      //message if the player tries to drop something that is not in the backpack
      gameMessage = "You can't do that.";
    }
  } 
  else {
    //message if the backpack is empty
    gameMessage = "You're not carrying anything.";
  }
}

//use item function
function useItem() {
  //find out if the item is in the backpack
  //find the item's array index number in the backpack
  let backpackIndexNumber = backpack.indexOf(item);

  //error message that lets the player know the backpack is empty (-1 means inventory is empty)
  if (backpackIndexNumber === -1) {
    gameMessage = "You're not carrying any items.";
  }
  //if there are no items in the backpack, then tell the player the backpack is empty
  if (backpack.length === 0) {
    gameMessage += "Your backpack is empty";
  }

  //if the item is found in the backpack figure out what to do with the item
  if (backpackIndexNumber !== -1) {
    switch (item) {
      //use key
      case "key":
        if (mapLocation === 2) {
		  chestOpen();
          gameMessage = "You use the rusty key to open the chest in the tool shed.";
          backpack.splice(backpackIndexNumber, 1);
          //checks location of player
          console.log(mapLocation + " current map location");

          gameItems.push("candle");
          itemLocations.push(mapLocation);
          console.log(backpackIndexNumber);
        } 
		else {
          gameMessage = "You don't see anything in the room that would use the key.";
        }
        break;

      //use cheese
      case "cheese":
        if (mapLocation === 6) {
          gameMessage = "You give the mouse the piece of cheese.  The mouse brings you a picture.  You place the picture in your backpack.";
          backpack.splice(backpackIndexNumber, 1);
          //check location of player
          console.log(mapLocation + " current map location");

          gameItems.push("picture");
          itemLocations.push(mapLocation);
          console.log(backpackIndexNumber);
        } 
		else {
          gameMessage = "You cannot use the cheese here.";
        }
        break;

      //use candle
      case "candle":
        if (mapLocation === 0) {
          gameMessage = "You light the candle and place it on the patio table.  The candle emits a lovely glow.";
          backpack.splice(backpackIndexNumber, 1);
        }
		else {
		gameMessage = "You cannot use the candle here.";
		}
        break;

      //use picture
      case "picture":
        if (mapLocation === 5) {
          gameMessage = "You place the picture on the bed side table.";
          //remove item from players backpack
          backpack.splice(backpackIndexNumber, 1);
        } else {
          gameMessage = "You cannot use the picture here.";
        }
        break;
		
		case "toy":
		if (mapLocation === 8) {
			gameMessage = "You place the toy back into the toy box where it belongs.";
		    //remove item from players backpack
			backpack.splice(backpackIndexNumber, 1);
		} else {
			gameMessage = "You cannot use the toy here.";
		}
		break;
    }
  }
}

//this function renders the game
function render() {
	
	startBtn.style.display = "none";
	display.style.display = "block";
	
	let i;
  //This renders the location
  output.innerHTML = map[mapLocation];
  image.src = "../images/" + images[mapLocation];

  //This will display an item if it happens to be in the players location
  for (i = 0; i < gameItems.length; i+=1) {
    if (mapLocation === itemLocations[i]) {
      output.innerHTML += "<br>You notice a <strong>" + gameItems[i] + "</strong>.  It appears to be useful somehow. <br>";
    }
  }

  //This displays the game message
  output.innerHTML += "<br>" + gameMessage + "<br>";

  //This displays the contents in the backpack
  if (backpack.length !== 0) {
    output.innerHTML += "<br>Your current backpack inventory: " + backpack.join(", ");
  }
  input.value = "";
}