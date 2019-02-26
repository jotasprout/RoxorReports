function addVisibility(visNum) {
	// get visibility
	var newvisibility = getField("vis_" + visNum).valueAsString;
	
	// push it into the visibility array
	visibility.push(newvisibility).value;
	
	// Add to existing visibility menus without resetting them
	
	for (var i in visibilityMenus) {
	
		// get name of visibility menu
		var thisVisibilityMenu = this.getField(visibilityMenus[i]);
		
		// get current visibility selected in visibility menu
		var currentVisibilityIndex = thisVisibilityMenu.currentValueIndices;
		var currentVisibility = thisVisibilityMenu.getItemAt(currentVisibilityIndex, false);
		
		// put visibility array into visibility menu (this resets the menu)
		thisVisibilityMenu.setItems(visibility); 
		
		// Find the menu's previously selected visibility in the array and reselect it in the menu
		for (var i in visibility) {
			if (visibility[i] == currentVisibility) {
				thisVisibilityMenu.currentValueIndices = [i];
			}
		}
	}
}

function removeVisibility(visNum) {

	// identify unloved visibility
	var unlovedvisibility = getField("vis_" + visNum).valueAsString;
	
	// find unloved visibility in visibility array
	var unlovedConInArray = visibility.indexOf(unlovedvisibility);
	// remove unloved visibility from visibility array
	visibility.splice(unlovedConInArray,1);
	
    this.resetForm("visibility_" + visNum);

	// Remove from existing visibility menus without resetting them
	
	for (var i in visibilityMenus) {
	
		// get name of visibility menu
		var thisVisibilityMenu = this.getField(visibilityMenus[i]);
		
		// get current visibility selected in visibility menu
		var currentVisibilityIndex = thisVisibilityMenu.currentValueIndices;
		var currentVisibility = thisVisibilityMenu.getItemAt(currentVisibilityIndex, false);
		
		// put visibility array into visibility menu (this resets the menu)
		thisVisibilityMenu.setItems(visibility); 
		
		// Find the menu's previously selected visibility in the array and reselect it in the menu
		for (var i in visibility) {
			if (visibility[i] == currentVisibility) {
				thisVisibilityMenu.currentValueIndices = [i];
			}
		}
	}
}