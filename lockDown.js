// "theSecond" is the target prefix 
function lockDownDestroy(theSecond) {

    // Create empty variable for target field
    var myFullFieldName;

	// Finds the number of fields in the PDF and loops through them
	for (var i = this.numFields-1; i > 0; i--) {
		
		// Gets the name of the current field
		var fieldInSight = this.getNthFieldName(i);

		// Splits the field name into sections and puts them in an array
		var fieldNamePieces = fieldInSight.split(".");

		// Checks if field is a target
		if (fieldNamePieces[2] == theSecond) {
			
			// If true, it reassembles the field name
			myFullFieldName = fieldNamePieces[0] + "." + fieldNamePieces[1] + "." + fieldNamePieces[2] + "." + fieldNamePieces[3];
			// 
			this.removeField(myFullFieldName);
			
		} // end of if
	} // end of for
} // end of function

// removes all text box related buttons on Actions pages
function removeButts(){
	lockDownDestroy("single");
	lockDownDestroy("double");
	lockDownDestroy("howmany");
}

// removes strokes from all text boxes
function unStrokeMe(){
	lockDownLineWidth("tall");
	lockDownLineWidth("short");
}

// destroy dash
function destroyDashboards(){
	this.deletePages({nStart:0,nEnd:1});
}

// seek all templates
function revealAllTemplates(){
	for (var i in templatesToDestroy) {
		this.getTemplate(templatesToDestroy[i]).hidden = false;
	}
}

// destroy all templates
function destroyAllTemplates(){
	this.deletePages({nStart:numPages-14,nEnd:numPages-1});
}

// "theSecond" is the target prefix 
function lockDownLineWidth(theSecond){

    // Create empty variable for target field
    var myFullFieldName;

	// Finds the number of fields in the PDF and loops through them
	for (var i = this.numFields-1; i > 0; i--) {
		
		// Gets the name of the current field
		var fieldInSight = this.getNthFieldName(i);

		// Splits the field name into sections and puts them in an array
		var fieldNamePieces = fieldInSight.split(".");

		// Checks if field is a target
		if (fieldNamePieces[2] == theSecond) {
			
			// If true, it reassembles the field name
			myFullFieldName = fieldNamePieces[0] + "." + fieldNamePieces[1] + "." + fieldNamePieces[2] + "." + fieldNamePieces[3];
			// 
			var fieldOfGhosts = this.getField(myFullFieldName);
			fieldOfGhosts.strokeColor = ["T"];
			
		} // end of if
	} // end of for
} // end of function

