var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i<names.length;i++){
	var firstletter=names[i].charAt(0).toLowerCase();
	if(firstletter=='j'){
		console.log("Goodbye "+names[i]);
	}
	else{
		console.log("Hello "+names[i]);
	}
}