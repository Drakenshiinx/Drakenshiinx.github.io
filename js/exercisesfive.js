"use strict";
var x = 0;
var gameList = Array();

function addGame()
{
gameList[x] = document.getElementById("nameOfGame").value;
alert("You added " + gameList[x] + " to the the array.  It is in position " + x);
x++;
}
//this function adds items to the array

function displayGames()
{
    var shuffledList = [];
  
  	if (gameList.length < 9)
	{
		alert("please enter at least 9 items");
		//this gives you a pop up alert if you do not enter enough items to the array
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

function clearArray() 
  {
  for (var i = 0; gameList.length; i++)
    {
      gameList.splice(i, gameList.length);
    }
	document.getElementById("list").innerHTML ="";
	//console.log(gameList);
	//this is to confirm array is cleared in the console
	x = 0;
   //this resets x
}
//this clears the array and resets it