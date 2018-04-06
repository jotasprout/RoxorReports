function addInvestigator(investNum) {
	// get investigator
	var newinvestigator = getField("investigator_" + investNum).valueAsString;
	
	// push it into the investigator array
	investigator.push(newinvestigator).value;
	
	// Add to existing investigator menus without resetting them
	
	for (var i in investigatorMenus) {
	
		// get name of investigator menu
		var thisInvestigatorMenu = this.getField(investigatorMenus[i]);
		
		// get current investigator selected in investigator menu
		var currentInvestigatorIndex = thisInvestigatorMenu.currentValueIndices;
		var currentInvestigator = thisInvestigatorMenu.getItemAt(currentInvestigatorIndex, false);
		
		// put investigator array into investigator menu (this resets the menu)
		thisInvestigatorMenu.setItems(investigator); 
		
		// Find the menu's previously selected investigator in the array and reselect it in the menu
		for (var i in investigator) {
			if (investigator[i] == currentInvestigator) {
				thisInvestigatorMenu.currentValueIndices = [i];
			}
		}
	}
}




function removeInvestigator(investNum) {

	// identify unloved investigator
	var unlovedinvestigator = getField("investigator_" + investNum).valueAsString;
	
	// find unloved investigator in investigator array
	var unlovedInvestInArray = investigator.indexOf(unlovedinvestigator);
	// remove unloved investigator from investigator array
	investigator.splice(unlovedInvestInArray,1);
	// Acro shows its work
	console.println(investigator);
	
    this.resetForm("investigator_" + investNum);

	// Remove from existing investigator menus without resetting them
	
	for (var i in investigatorMenus) {
	
		// get name of investigator menu
		var thisInvestigatorMenu = this.getField(investigatorMenus[i]);
		
		// get current investigator selected in investigator menu
		var currentInvestigatorIndex = thisInvestigatorMenu.currentValueIndices;
		var currentInvestigator = thisInvestigatorMenu.getItemAt(currentInvestigatorIndex, false);
		
		// put investigator array into investigator menu (this resets the menu)
		thisInvestigatorMenu.setItems(investigator); 
		
		// Find the menu's previously selected investigator in the array and reselect it in the menu
		for (var i in investigator) {
			if (investigator[i] == currentInvestigator) {
				thisInvestigatorMenu.currentValueIndices = [i];
			}
		}
	}
}