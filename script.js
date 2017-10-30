let scene1 = document.querySelector(".scene1");
let scene01 =document.querySelector(".scene01");
let scene2 = document.querySelector(".scene2");
let scene02 = document.querySelector(".scene02");
let scene3 = document.querySelector(".scene3");
let scene4 = document.querySelector(".scene4");
let scene5 = document.querySelector(".scene5");
let scene6 = document.querySelector(".scene6");
let scene7 = document.querySelector(".scene7");
let scene8 = document.querySelector(".scene8");
let scene9 = document.querySelector(".scene9");
let scene10 = document.querySelector(".scene10");

let church_intro = document.querySelector(".church_intro");
let esDancing = document.querySelector(".es-dancing");
let esStanding = document.querySelector(".es-standing");
let esmeralda = document.querySelector(".esmeralda");
let audience = document.querySelector(".audience");
let kingOfFools = document.querySelector(".kingoffools");
let shakingFool = document.querySelector(".shakingfool");
let credits = document.querySelector(".credits");
let watered = 0;




church_intro.addEventListener('click', showScene01);

function showScene01() {
	scene01.classList.remove("notshowing");
	scene1.classList.add("notshowing");

	let bellsAudio = new Audio('audio/1_bells.mp3') //selects document
	bellsAudio.play() //starts music

	setTimeout(showScene2, 15000)
}

function showScene2() {
	scene2.classList.remove("notshowing");
	scene01.classList.add("notshowing");
	console.log('showing scene 2')

	console.log('danceClick is' + danceClick)

	esStanding.addEventListener('click', startDancingAudio)

}

let danceClick = 0


function startDancingAudio() {
		console.log('fun startDancingAudio executed')
		if (danceClick == 0) {
			danceClick ++
			console.log('danceClick is' + danceClick)
			let dancingAudio = new Audio('audio/2_dance.mp3') //selects document
			dancingAudio.play() //starts music
			document.getElementById('es-dancing').classList.remove("notshowing");
			document.getElementById('es-standing').classList.add("notshowing");


			setTimeout(showScene02, 11000)
		}
}



function showScene02() {

		scene02.classList.remove("notshowing");
		scene2.classList.add("notshowing");

		setTimeout(showScene3, 3000)
}


function showScene3() {
		scene3.classList.remove("notshowing");
		scene02.classList.add("notshowing");

		let hunchback_chasing =document.querySelector(".hunchback");

		let screamClick = 0
		hunchback_chasing.addEventListener('click', startScream)

		function startScream(){
      if(screamClick == 0){
				screamClick++;

				console.log('scream audio');
				let screamNewAudio = new Audio('audio/7_murderscream.mp3');
				screamNewAudio.play();

				setTimeout(chasing, 6000)
			}
		}

		function chasing(){

        console.log('chase audio');
		let chaseAudio = new Audio('audio/4_chase.mp3');
		chaseAudio.play();


		setTimeout(showScene5, 11000)
	}

}

function showScene5() {
		scene5.classList.remove("notshowing");
		scene3.classList.add("notshowing");


       console.log('crowd audio');
		let crowdTalkAudio = new Audio('audio/5_crowdtalk.mp3');
		crowdTalkAudio.play();


		setTimeout(beating, 4530)
	}

function beating() {
		console.log('whip audio');
		let whipAudio = new Audio('audio/5_whip.mp3');
		whipAudio.play();

		setTimeout(showScene6, 13000)
	}


function showScene6() {
		console.log('laugh audio');
		let waterAudio = new Audio('audio/6_water.mp3');
		waterAudio.play();
		console.log('move to scene6');
		scene6.classList.remove("notshowing");
		scene5.classList.add("notshowing");


		document.getElementById('hunchbackLean').addEventListener('click', giveWaterNow)

		function giveWaterNow() {
			document.getElementById('es-watering').classList.remove("notshowing")
			document.getElementById('hunchbackLean').classList.add("notshowing")
			watered ++
			console.log('give water')

			setTimeout(anotherAsk , 500)
		}

		function anotherAsk(){
			document.getElementById('es-watering').classList.add("notshowing")
			document.getElementById('hunchbackLean2').classList.remove("notshowing")
		}

		document.getElementById('hunchbackLean2').addEventListener('click', anotherWater)

		function anotherWater() {
			document.getElementById('es-watering').classList.remove("notshowing")
			document.getElementById('hunchbackLean2').classList.add("notshowing")
			watered ++
			console.log('give water again')

			setTimeout(stopWatering , 500)
		}

		function stopWatering(){
			document.getElementById('es-watering').classList.add("notshowing")
			document.getElementById('hunchbackLean2').classList.remove("notshowing")

		}

		setTimeout(checkWatered, 18000)

	function checkWatered() {
		if (watered > 2) {
			showScene7
		}
	}

	function showScene7() {
		console.log('holymusic audio');
		let holyMusicAudio = new Audio('audio/3_holymusic.mp3');
		holyMusicAudio.play();
		console.log('move to scene3');
		scene7.classList.remove("notshowing");
		scene6.classList.add("notshowing");

		setTimeout(evilTalk, 12000)
	}

	function evilTalk() {
		console.log('eviltalk audio');
		let evilTalkAudio = new Audio('audio/3_eviltalk.mp3');
		evilTalkAudio.play();

		setTimeout(showScene8, 10000)

	}
/*		console.log('dance audio');
		let danceAudio = new Audio('audio/7_dance.mp3');
		danceAudio.play();
		console.log('move to scene7');
		scene7.classList.remove("notshowing");
		scene6.classList.add("notshowing");

		setTimeout( blamingGypsy, 27000)
	}

	function blamingGypsy(){
		console.log('blame audio');
		let blameGypsyAudio = new Audio('audio/7_blamegypsy.mp3');
		blameGypsyAudio.play();

		setTimeout ( screaming, 4580)
	}

	function screaming(){
		console.log('scream audio');
		let screamAudio = new Audio('audio/7_murderscream.mp3');
		screamAudio.play();

		setTimeout (showScene8, 6000)
	}*/


	function showScene8() {
		console.log('drama music audio');
		let dramaticMusicAudio = new Audio ('audio/8_dramaticmusic.mp3');
		dramaticMusicAudio.play();
		console.log('move to scene8');
		scene8.classList.remove("notshowing");
		scene7.classList.add("notshowing");

		setTimeout(showScene9, 29000)
	}

	function showScene9() {
		console.log('innocent audio');
		let innocentAudio = new Audio ('audio/8_innocent.mp3');
		innocentAudio.play();
		console.log('move to scene9');
		scene9.classList.remove("notshowing");
		scene8.classList.add("notshowing");

		setTimeout( theEnd, 5000)
	}

	function theEnd(){
		console.log('holy audio');
		let holyAudio = new Audio ('audio/8_holymusic.mp3');
		holyAudio.play();

		setTimeout(showScene10,31000)  // too long?
	}

	function showScene10() {
		console.log('move to scene10');
		scene10.classList.remove("notshowing");
		credits.classList.remove("notshowing");
		scene9.classList.add("notshowing");

	}









}

/*

kingOfFools.classList.add("shaking");

let btn = document.querySelector(".button");

btn.addEventListener('click', showScene3);

function showScene3() {

	scene1.classList.add("notshowing");
}*/
