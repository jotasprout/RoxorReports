// shows "and" if there is a second subject
// Gets prefix if second subject is added after Cover is spawned
function showAnd() {

	// Finds the number of fields in the PDF and loops through them
	for (var i = 0; i < this.numFields; i++) {
		
		// Create empty variable for target page number
    	var myFullFieldName;
		
		// Gets the name of the current field
		var fieldInSight = this.getNthFieldName(i);

		// Splits the field name into sections and puts them in an array
		var fieldNamePieces = fieldInSight.split(".");

		// Basically, checks if Cover has already been spawned
		if (fieldNamePieces[2] == "hideAnd") {
			
			// If so, reassembles the field name
			myFullFieldName = fieldNamePieces[0] + "." + fieldNamePieces[1] + "." + fieldNamePieces[2];

			// Hides the Hiding field using the prefixes
			getField(myFullFieldName).display = display.hidden;
		} // end of if
	} // end of for
	
	// if it doesn't find a "hideAnd" field with a prefix, it simply hides the hiding field on the template
	getField("hideAnd").display = display.hidden;
	
} // end of function