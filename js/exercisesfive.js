var x = 0;
var gameList = Array();

function addGame()
{
gameList[x] = document.getElementById("nameOfGame").value;
alert("Element: " + gameList[x] + " Added at index " + x);
x++;
document.getElementById("nameOfGame").value = "";
}

function displayGames()
{
var e ="<hr/>";

for (var z = 0; z < gameList.length; z++)
   {
    e += "Element " + z + "= " + gamelist[z] + "<br/>";
   }
  document.getElementById("gameList").innerHTML = e;
}