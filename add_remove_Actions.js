function addAction(actNum) {
	// get action
	var newaction = getField("action_" + actNum).valueAsString;
	
	// push it into the action array
	actions.push(newaction).value;
	
	// Add to existing action menus without resetting them
	
	for (var i in actionMenus) {
	
		// get name of action menu
		var thisActionMenu = this.getField(actionMenus[i]);
		
		// get current action selected in action menu
		var currentActionIndex = thisActionMenu.currentValueIndices;
		var currentAction = thisActionMenu.getItemAt(currentActionIndex, false);
		
		// put action array into action menu (this resets the menu)
		thisActionMenu.setItems(actions); 
		
		// Find the menu's previously selected action in the array and reselect it in the menu
		for (var i in actions) {
			if (actions[i] == currentAction) {
				thisActionMenu.currentValueIndices = [i];
			}
		}
	}
}


function removeAction(actNum) {

	// identify unloved action
	var unlovedaction = getField("action_" + actNum).valueAsString;
	
	// find unloved action in actions array
	var unlovedActInArray = actions.indexOf(unlovedaction);
	// remove unloved action from actions array
	actions.splice(unlovedActInArray,1);
	
    this.resetForm("action_" + actNum);

	// Remove from existing action menus without resetting them
	
	for (var i in actionMenus) {
	
		// get name of action menu
		var thisActionMenu = this.getField(actionMenus[i]);
		
		// get current action selected in action menu
		var currentActionIndex = thisActionMenu.currentValueIndices;
		var currentAction = thisActionMenu.getItemAt(currentActionIndex, false);
		
		// put actions array into action menu (this resets the menu)
		thisActionMenu.setItems(actions); 
		
		// Find the menu's previously selected action in the array and reselect it in the menu
		for (var i in actions) {
			if (actions[i] == currentAction) {
				thisActionMenu.currentValueIndices = [i];
			}
		}
	}
}