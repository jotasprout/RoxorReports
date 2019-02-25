// get subject's name
var subject_01_name = getField("subject_01").valueAsString;

// push it into the subjects array
subjects.push(subject_01_name).value;

// put subject's name in first placeholder on Cover
getField("subject_01_CoverPage").value = subject_01_name;

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