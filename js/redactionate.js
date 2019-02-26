function redactionate (){
	
	// get first page number
	var startPage = 2;
	
	// get last page number
	var endPage = numPages - 1;
	
	for (var i=startPage; i < endPage; i++) {
		// below does NOT create new page and does overlay
		this.getTemplate("redact").spawn((i),true,true);
	}
}