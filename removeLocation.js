function removeLocation(locNum) {

	// identify unloved location
	var unlovedlocation = getField("loc_" + locNum).valueAsString;
	
	// find unloved location in locations array
	var unlovedLocInArray = locations.indexOf(unlovedlocation);
	// remove unloved location from locations array
	locations.splice(unlovedLocInArray,1);
	
    this.resetForm("loc_" + locNum);

	// Remove from existing location menus without resetting them
	
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