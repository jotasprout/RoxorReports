function addLocation(locNum) {
	// get location
	var newlocation = getField("loc_" + locNum).valueAsString;
	
	// push it into the locations array
	locations.push(newlocation).value;
	
	// Add to existing location menus without resetting them
	
	for (var i in locationMenus) {
	
		// get name of location menu
		var thisLocationMenu = this.getField(locationMenus[i]);
		
		// get current location selected in location menu
		var currentLocationIndex = thisLocationMenu.currentValueIndices;
		var currentLocation = thisLocationMenu.getItemAt(currentLocationIndex, false);
		
		// put locations array into location menu (this resets the menu)
		thisLocationMenu.setItems(locations); 
		
		// Find the menu's previously selected location in the array and reselect it in the menu
		for (var i in locations) {
			if (locations[i] == currentLocation) {
				thisLocationMenu.currentValueIndices = [i];
			}
		}
	}
}