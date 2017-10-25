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
	}
}




kingOfFools.classList.add("shaking");

let btn = document.querySelector(".button");

btn.addEventListener('click', showScene3);

function showScene3(){
	
	scene1.classList.add("notshowing");
}


