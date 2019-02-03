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
  var shuffledList = [];
  while (gameList.length >0)
    {
      let rnd = Math.floor(Math.random()* gameList.length);
      shuffledList.push(gameList[rnd]);
      gameList.splice(rnd,1);
    }

  document.getElementById("list").innerHTML = shuffledList;
    
}