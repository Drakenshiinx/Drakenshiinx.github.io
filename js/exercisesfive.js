"use strict";
var x = 0;
var gameList = Array();

function addGame()
{
gameList[x] = document.getElementById("nameOfGame").value;
alert("Element: " + gameList[x] + " Added at index " + x);
x++;
//document.getElementById("nameOfGame").value = "";
}

function displayGames()
{
    var shuffledList = [];
  
  	if (gameList.length < 9)
	{
		alert("please enter at least 9 items");
	}
  else
    {

    while (gameList.length >0)
      {
        let rnd = Math.floor(Math.random()* gameList.length);
        shuffledList.push(gameList[rnd]);
        gameList.splice(rnd,1);
      }
	  	      for (var i = 0; i<shuffledList.length; i++)
        {
          document.getElementById("list").innerHTML += shuffledList[i] + "<br/>";
		  //this will display the results of the array
        }
    }

}
//function clearArray()
//{
//gameList.length = 0;
//}
function clearArray() 
  {
  for (var i = 0; gameList.length; i++)
    {
      gameList.splice(i, gameList.length);
    }
	console.log(gameList);
   
}