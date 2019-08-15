for(var [selector, value] of Object.entries(map)){
	if(element = document.querySelector(selector)){
		element.value = value;
	} else {
		console.log("This element not exists: " + selector);
	}
}
