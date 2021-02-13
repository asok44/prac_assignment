function void validate(){
	const name= document.getElementById("name");
	const description= document.getElementById("description");
	
	if(name.value == ""){
		event.preventDefault();
		alert("The name can't be empty.");
		return false;
	}
	else{
		return true;
	}

	if(description.value == ""){
		event.preventDefault();
		return false;
	}
	else{
		return true; 
	}


}