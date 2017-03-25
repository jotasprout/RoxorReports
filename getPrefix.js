var thisPagePrefix;

function getPrefix (){
	var thisButtonName = event.target.name;
	var buttonNamePieces = thisButtonName.split(".");
	thisPagePrefix = buttonNamePieces[0] + "." + buttonNamePieces[1] + ".";
}