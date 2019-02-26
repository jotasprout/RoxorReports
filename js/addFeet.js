function addFeet(){
	
	// get first page number
	var startPage = getField("ftStartPage").valueAsString - 1;
	// show me startPage
	// console.println(startPage);
	
	// get last page number
	var endPage = getField("ftEndPage").valueAsString;
	// show me endPage
	// console.println(endPage);
	
	for (var i=startPage; i < endPage; i++) {
		// console.println((i));
		// below does NOT create new page and does overlay
		this.getTemplate("footer").spawn((i),true,true);
		this.getTemplate("staticFooter").spawn((i),false,true);
	}
}