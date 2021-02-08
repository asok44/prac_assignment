function void validate(){
	const name= document.getElementByClass("name").value;
	const description= document.getElementByClass("description").value;
	var nameToMatch= /[a-z A-Z]/;
	var descriptionToMatch= /[a-z A-Z 0-9 \.]/
	
	if(nameToMatch.test(name)){
		return true;
	}
	else{
		event.preventDefault();
		windows.alert("The name should not include any special symbols or numbers.");
		name.style.borderColor= "red";
		return false;
	}

	if(descriptionToMatch.test(description)){
		return true;
	}
	else{
		event.preventDefault();
		return false; 
	}


}