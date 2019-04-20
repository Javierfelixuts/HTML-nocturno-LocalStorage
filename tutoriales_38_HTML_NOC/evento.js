window.onload = function(){	 
	var border = document.querySelector('.border');
	var button = document.querySelector('.button');
	var day = document.querySelector('.day');

	var clases = {
		"activeBorder" : "activeBorder",
		"active" : "active",
		"night" : "night",
	}
	

	var toggleButton = document.querySelector('.toggleButton').addEventListener('click',function(e){
		
		localStorage.setItem("click", 1);
			 if (border.classList.contains("activeBorder")) {
			 	localStorage.setItem("click", 0);	
			 	localStorage.setItem("clases", JSON.stringify(clases));
			 }
		
		
		border.classList.toggle("activeBorder");
		button.classList.toggle("active");
		day.classList.toggle("night");

	})

if (localStorage.getItem("click") == "1") {
	if (localStorage.getItem("clases")) {
		var jsnClases = JSON.parse(localStorage.getItem("clases"));
		border.classList.add(jsnClases.activeBorder);
		button.classList.add(jsnClases.active);
		day.classList.add(jsnClases.night);

	}else{
		border.classList.remove(jsnClases.activeBorder);
		button.classList.remove(jsnClases.active);
		day.classList.remove(jsnClases.night);
	}
}
		/*if(localStorage.getItem("clicked")){
			console.log('hay un elemento');
			document.querySelector('.border').classList.add("activeBorder")
		}*/
}
