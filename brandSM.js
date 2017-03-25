function brandSocialMedia(){
	
	// get first page number
	var startPage = getField("smStartPage").valueAsString - 1;
	
	// get last page number
	var endPage = getField("smEndPage").valueAsString;
	
	for (var i=startPage; i < endPage; i++) {
		console.println((i));
		// below does NOT create new page and does overlay
		this.getTemplate("brandSM").spawn((i),true,true);
		this.getTemplate("staticFooter").spawn((i),false,true);
	}
}