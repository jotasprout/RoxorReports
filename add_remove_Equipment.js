function addEquipment(equipNum) {
	// get equipment
	var newequipment = getField("equipment_" + equipNum).valueAsString;
	
	// push it into the equipment array
	equipment.push(newequipment).value;
	
	// Add to existing equipment menus without resetting them
	
	for (var i in equipmentMenus) {
	
		// get name of equipment menu
		var thisEquipmentMenu = this.getField(equipmentMenus[i]);
		
		// get current equipment selected in equipment menu
		var currentEquipmentIndex = thisEquipmentMenu.currentValueIndices;
		var currentEquipment = thisEquipmentMenu.getItemAt(currentEquipmentIndex, false);
		
		// put equipment array into equipment menu (this resets the menu)
		thisEquipmentMenu.setItems(equipment); 
		
		// Find the menu's previously selected equipment in the array and reselect it in the menu
		for (var i in equipment) {
			if (equipment[i] == currentEquipment) {
				thisEquipmentMenu.currentValueIndices = [i];
			}
		}
	}
}

function removeEquipment(equipNum) {

	// identify unloved equipment
	var unlovedequipment = getField("equipment_" + equipNum).valueAsString;
	
	// find unloved equipment in equipment array
	var unlovedEquipInArray = equipment.indexOf(unlovedequipment);
	// remove unloved equipment from equipment array
	equipment.splice(unlovedEquipInArray,1);
	// Acro shows its work
	console.println(equipment);
	
    this.resetForm("equipment_" + equipNum);

	// Remove from existing equipment menus without resetting them
	
	for (var i in equipmentMenus) {
	
		// get name of equipment menu
		var thisEquipmentMenu = this.getField(equipmentMenus[i]);
		
		// get current equipment selected in equipment menu
		var currentEquipmentIndex = thisEquipmentMenu.currentValueIndices;
		var currentEquipment = thisEquipmentMenu.getItemAt(currentEquipmentIndex, false);
		
		// put equipment array into equipment menu (this resets the menu)
		thisEquipmentMenu.setItems(equipment); 
		
		// Find the menu's previously selected equipment in the array and reselect it in the menu
		for (var i in equipment) {
			if (equipment[i] == currentEquipment) {
				thisEquipmentMenu.currentValueIndices = [i];
			}
		}
	}
}