// In Action for Reset Subjects button on dashboard #1

// reset subjects array
subjects = ["Choose Subject"];

// clear other new menus--this is temporary
this.resetForm(["chooseWeather", "chooseLocation", "chooseVisibility"]);

// clear subject names in form (this should also clear dependent fields)
this.resetForm(["subject_01", "subject_02", "subject_03", "subject_01_CoverPage", "subject_02_CoverPage"]);

for (var i in subjectMenus) {

// get name of subject menu
var thisSubjectMenu = this.getField(subjectMenus[i]);

// put subjects array into subject menu (resets every menu)
thisSubjectMenu.setItems(subjects); 

} 