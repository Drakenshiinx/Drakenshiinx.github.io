var x = 0;
var gameList = Array();

function addGame()
{
gameList[x] = document.getElementById("nameOfGame").value;
x++;
document.getElementById("nameOfGame").value = "";
}

function displayGames()
{
let e ="<hr/>";

for (var z = 0; z <array.length; z++)
{
e += "Element " +z+ "= " + gamelist[z] + "<br/>";
}
document.getElementById("displayedinfo").innerHTML = e;
}