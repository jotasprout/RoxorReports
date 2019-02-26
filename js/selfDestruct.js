// "theFirst" is the target prefix 
function selfDestructDestroy(theFirst) {

    // Create empty variable for target field
    var myFullFieldName;

	// Finds the number of fields in the PDF and loops through them
	for (var i = this.numFields-1; i > 0; i--) {
		
		// Gets the name of the current field
		var fieldInSight = this.getNthFieldName(i);

		// Splits the field name into sections and puts them in an array
		var fieldNamePieces = fieldInSight.split(".");

		// Checks if field is a target
		if (fieldNamePieces[1] == theFirst) {
			
			// If true, it reassembles the field name
			myFullFieldName = fieldNamePieces[0] + "." + fieldNamePieces[1] + "." + fieldNamePieces[2];
			// 
			this.removeField(myFullFieldName);
			
		} // end of if
	} // end of for
} // end of function

function selfDestruct(){
	lockDownDestroy("tall");
	lockDownDestroy("short");
	selfDestructDestroy("subject_background");
	selfDestructDestroy("actions");
    passNotes();
}

function passNotes(){
	for (var i = 0; i < this.numPages; i++)	{
		this.addAnnot({
			page: i,
			type: "FreeText",
			rect: [ 0, 0, 612, 792 ],
			alignment: 1,
			contents: "",
			fillColor: color.white,
			textSize: 30,
			width: 0,
			readOnly: true
		});	
	}
}

// Get the current date and set to midnight
var todaysDate = (new Date()).setHours(0, 0, 0, 0);

// Convert the value of DiscountEnds to a date
var suicideDay = util.scand("mm/dd/yyyy", getField("suicideDate").value);

// kill yourself
if (todaysDate>suicideDay)
   {
    selfDestruct();
    console.println("Today's special is Seppuku!");
   }
 else
   {
   console.println("Please enjoy our sushi.");
   }