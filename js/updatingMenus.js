// Adds new menu to a menus array so the menu gets updated when appropriate

function GetFullMenuName(originalMenu,menuArray) {

    // Create empty variable for full field name
    var myFullMenuName;

	// Finds the number of fields in the PDF and loops through them
	for (var i = 0; i < this.numFields; i++) {
		
		// Gets the name of the current field
		var fieldInSight = this.getNthFieldName(i);
		
		// Splits the field name into sections and puts them in an array
		var fieldNamePieces = fieldInSight.split(".");
		
		// Checks if field is a "Choose Subject" menu
		if (fieldNamePieces[2] == originalMenu) {
			
			// If true, it reassembles the field name
			myFullMenuName = fieldNamePieces[0] + "." + fieldNamePieces[1] + "." + originalMenu;
			
			// If nonexistent, adds it to the array listing all the Subject menus that are updated when appropriate
			checkExists(myFullMenuName,menuArray);
		}
	}
}


// Checks if a given menu is in a given menu array
function checkExists (theMenu, theArray) {
	var count = theArray.length;
	var menuExists = false;
	
	//loops through the array
	for (var k = 0; k < count; k++) {

		// checks if each item matches theMenu
		// return stops this if it does
		if (theArray[k] === theMenu) {
            console.println(theMenu + " is already here");
			menuExists = true;
			return true; 
        } 

	}// end of loop
	
	if (menuExists == false) {
			// if return doesn't stop it, adds theMenu to theArray
			console.println(theMenu + " is not here so I am adding it");
        	theArray.push(theMenu);
		}

} // end of function