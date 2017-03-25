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

var singleFullRectangle = [30,595,581,70];
var topRowRectangle = [30,595,581,335];
var bottomRowRectangle = [30,330,581,70];
var leftColumn = [30,595,303,70];
var rightColumn = [308,595,581,70];
var leftLower = [30,330,303,70];
var leftUpper = [30,595,303,335];
var rightLower = [308,330,581,70];
var rightUpper = [308,595,581,335];

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

