//create the array
var map = [];

map[0] = "The back patio.";
map[1] = "The backyard.";
map[2] = "The tool shed.";

//set player location
var mapLocation = 1;

//the output element
var output = document.querySelector("#output");

//display the players location
output.innerHTML = map[mapLocation];