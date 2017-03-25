function removeSubject(subNum) {

	// identify unloved subject
	var unlovedsubject = getField("subject_" + subNum).valueAsString;
	
	// find unloved subject in subjects array
	var unlovedSubInArray = subjects.indexOf(unlovedsubject);
	// remove unloved subject from subjects array
	subjects.splice(unlovedSubInArray,1);
	
    this.resetForm("subject_" + subNum);

	// Remove from existing subject menus without resetting them
	
	for (var i in subjectMenus) {
	
		// get name of subject menu
		var thisSubjectMenu = this.getField(subjectMenus[i]);
		
		// get current subject selected in subject menu
		var currentSubjectIndex = thisSubjectMenu.currentValueIndices;
		var currentSubject = thisSubjectMenu.getItemAt(currentSubjectIndex, false);
		
		// put subjects array into subject menu (this resets the menu)
		thisSubjectMenu.setItems(subjects); 
		
		// Find the menu's previously selected subject in the array and reselect it in the menu
		for (var i in subjects) {
			if (subjects[i] == currentSubject) {
				thisSubjectMenu.currentValueIndices = [i];
			}
		}
	}
}