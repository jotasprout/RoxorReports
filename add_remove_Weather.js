function addCondition(conNum) {
	// get condition
	var newcondition = getField("condition_" + conNum).valueAsString;
	
	// push it into the condition array
	weather.push(newcondition).value;
	
	// Add to existing condition menus without resetting them
	
	for (var i in conditionMenus) {
	
		// get name of condition menu
		var thisConditionMenu = this.getField(conditionMenus[i]);
		
		// get current condition selected in condition menu
		var currentConditionIndex = thisConditionMenu.currentValueIndices;
		var currentCondition = thisConditionMenu.getItemAt(currentConditionIndex, false);
		
		// put condition array into condition menu (this resets the menu)
		thisConditionMenu.setItems(weather); 
		
		// Find the menu's previously selected condition in the array and reselect it in the menu
		for (var i in weather) {
			if (weather[i] == currentCondition) {
				thisConditionMenu.currentValueIndices = [i];
			}
		}
	}
}

function removeCondition(conNum) {

	// identify unloved condition
	var unlovedcondition = getField("condition_" + conNum).valueAsString;
	
	// find unloved condition in conditions array
	var unlovedConInArray = weather.indexOf(unlovedcondition);
	// remove unloved condition from conditions array
	weather.splice(unlovedConInArray,1);
    this.resetForm("condition_" + conNum);

	// Remove from existing condition menus without resetting them
	
	for (var i in conditionMenus) {
	
		// get name of condition menu
		var thisConditionMenu = this.getField(conditionMenus[i]);
		
		// get current condition selected in condition menu
		var currentConditionIndex = thisConditionMenu.currentValueIndices;
		var currentCondition = thisConditionMenu.getItemAt(currentConditionIndex, false);
		
		// put conditions array into condition menu (this resets the menu)
		thisConditionMenu.setItems(weather); 
		
		// Find the menu's previously selected condition in the array and reselect it in the menu
		for (var i in weather) {
			if (weather[i] == currentCondition) {
				thisConditionMenu.currentValueIndices = [i];
			}
		}
	}
}