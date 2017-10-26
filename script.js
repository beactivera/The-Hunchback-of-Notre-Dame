let scene1 = document.querySelector(".scene1");
let scene2 = document.querySelector(".scene2");
let scene3 = document.querySelector(".scene3");
let scene4 = document.querySelector(".scene4");
let scene5 = document.querySelector(".scene5");
let scene6 = document.querySelector(".scene6");
let scene7 = document.querySelector(".scene7");
let scene8 = document.querySelector(".scene8");
let scene9 = document.querySelector(".scene9");
let scene10 = document.querySelector(".scene10");

let square = document.querySelector(".square");
let esDancing = document.querySelector(".es-dancing");
let esmeralda = document.querySelector(".esmeralda");
let audience = document.querySelector(".audience");
let kingOfFools = document.querySelector(".kingoffools");
let shakingFool = document.querySelector(".shakingfool");

square.addEventListener('click', showScene2);

function showScene2(){
	scene2.classList.remove("notshowing");
	scene1.classList.add("notshowing");
	
	
		
	setTimeout (stopDancing, 4000) 
	
	function stopDancing() {
		esmeralda.style.display = 'block'
		esDancing.style.display = 'none'
		console.log('stopped dancing');
		shakingFool.style.display = 'block'
		kingOfFools.style.display = 'none'
		console.log('shaking');
	
	
		setTimeout (showScene3, 2000)
		
	}


	function showScene3() {
			console.log('move to scene3');
			scene3.classList.remove("notshowing");
			scene2.classList.add("notshowing");
		
		setTimeout (showScene4, 2000)
	}
	


function showScene4(){
	 console.log('move to scene4');
	 scene4.classList.remove("notshowing");
	 scene3.classList.add("notshowing");
	
	setTimeout (showScene5,2000)
}

function showScene5(){
	 console.log('move to scene5');
	 scene5.classList.remove("notshowing");
	 scene4.classList.add("notshowing");
	
	setTimeout (showScene6,2000)
}
	
	function showScene6(){
	 console.log('move to scene6');
	 scene6.classList.remove("notshowing");
	 scene5.classList.add("notshowing");
	
	setTimeout (showScene7,2000)
}
	
	function showScene7(){
	 console.log('move to scene7');
	 scene7.classList.remove("notshowing");
	 scene6.classList.add("notshowing");
	
	setTimeout (showScene8,2000)
}
	
	function showScene8(){
	 console.log('move to scene8');
	 scene8.classList.remove("notshowing");
	 scene7.classList.add("notshowing");
	
	setTimeout (showScene9,2000)
}
	function showScene9(){
	 console.log('move to scene9');
	 scene9.classList.remove("notshowing");
	 scene8.classList.add("notshowing");
	
	setTimeout (showScene10,2000)
	}
	
	function showScene10(){
	 console.log('move to scene10');
	 scene10.classList.remove("notshowing");
	 scene9.classList.add("notshowing");
	
	}
	
	
	
	
	
	
	
	
	
	
}

kingOfFools.classList.add("shaking");

let btn = document.querySelector(".button");

btn.addEventListener('click', showScene3);

function showScene3(){
	
	scene1.classList.add("notshowing");
}


