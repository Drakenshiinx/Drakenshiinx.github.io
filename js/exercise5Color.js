var input1 = document.querySelector("#inputRed");
var input2 = document.querySelector("#inputGreen");
var input3 = document.querySelector("#inputBlue");
var button = document.querySelector("#clicker");
var clearButton = document.querySelector("#clear");

button.addEventListener("click", clickHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);

function clickHandler(e) {
	var x = parseInt( input1.value );
	//the value of red
    var y = parseInt( input2.value );
	//the value of green
    var z = parseInt( input3.value );
	//the value of blue
	
    if (x < 0 || x > 255 || isNaN(x))
    {
    	alert("You must enter a number from 0 to 255 in Red!");
		//does a check for values not 0-255 and if its not a number for red
    }
		else if (y < 0 || y > 255 || isNaN(y))
    {
    	alert("You must enter a number from 0 to 255 in Green!");
		//does a check for values not 0-255 and if its not a number for green
    }
        else if (z < 0 || z > 255 || isNaN(z))
    {
    	alert("You must enter a number from 0 to 255 in Blue!");
		//does a check for values not 0-255 and if its not a number for blue
    }
		else
    {
    
		return colorBar.style.backgroundColor = "rgb("+x+"," +y+ "," +z+")";
		//this fills the color bar with the RGB values
	}
}
function clearColorHandler(e) {
	clear();
}

function clear() {
	colorBar.style.backgroundColor = "#ffcc99";
	//clears the color bar
	document.getElementById('inputRed').value = '';
	document.getElementById('inputGreen').value = '';
	document.getElementById('inputBlue').value = '';
	//clears the values in red, green and blue
}