// textBox Butts

// howmany.oneTextBox
hideTextChoices();
showSingleTextBox();
showSingleLayoutButtons();
getPrefix();
nameBox();

// single.resetTextBox
currentRectangle.rect = singleFullRectangle;

// Single.BottomRow
currentRectangle.rect = bottomRowRectangle;

// single.TopRow
currentRectangle.rect = topRowRectangle;

// single.LeftColumn
currentRectangle.rect = leftColumn;

// single.RightColumn
currentRectangle.rect = rightColumn;

// howmany.twoTextBoxes
hideTextChoices();
showTwoTextBoxes();
showDoubleLayoutButtons();
getPrefix();
nameBoxes();

// double.resetTextBoxes
singleRect_1.rect = topRowRectangle;
singleRect_2.rect = bottomRowRectangle;

// double.BothHalfLeft
singleRect_1.rect = leftUpper;
singleRect_2.rect = leftLower;

// double.KittyBoxes
singleRect_1.rect = rightUpper;
singleRect_2.rect = leftLower;

// double.TwoColumns
singleRect_1.rect = leftColumn;
singleRect_2.rect = rightLower;

// double.TwoRows
singleRect_1.rect = leftUpper;
singleRect_2.rect = bottomRowRectangle;