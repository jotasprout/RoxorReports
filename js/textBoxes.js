// textBoxes

var currentRectangle;

function nameBox(){
    currentRectangle = getField(thisPagePrefix + "tall.ActionText");
}

var singleRect_1;
var singleRect_2;

function nameBoxes(){
    singleRect_1 = getField(thisPagePrefix + "short.ActionText_1");
    singleRect_2 = getField(thisPagePrefix + "short.ActionText_2");
}

// [Upper-Left X, Upper-Left Y, Lower-Right X, Lower-Right Y]
var singleFullRectangle = [32,551,579,70];
var topRowRectangle = [32,551,579,313];
var bottomRowRectangle = [32,308,579,70];
var leftColumn = [32,551,302,70];
var rightColumn = [309,551,579,70];
var leftLower = [32,308,302,70];
var leftUpper = [32,551,302,313];
var rightLower = [309,308,579,70];
var rightUpper = [309,551,579,313];

// Hides the two transparent buttons for choosing number of text boxes
function hideTextChoices(){
	getPrefix();
	getField(thisPagePrefix + "howmany").display = display.hidden;
}

// Shows a single text box
function showSingleTextBox(){
	getPrefix();
	getField(thisPagePrefix + "tall.ActionText").display = display.visible;
}

// Shows two text boxes in the "short" group
function showTwoTextBoxes(){
	getField(thisPagePrefix + "short").display = display.visible;
}

// Shows layout buttons in the "single" group for ONE text box
function showSingleLayoutButtons(){
	getField(thisPagePrefix + "single").display = display.visible;
}

// Shows layout buttons in the "double" group for TWO text boxes
function showDoubleLayoutButtons(){
	getField(thisPagePrefix + "double").display = display.visible;
}

