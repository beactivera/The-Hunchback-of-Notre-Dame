let scene1 = document.querySelector(".scene1");
let scene01 =document.querySelector(".scene01");
let scene2 = document.querySelector(".scene2");
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
let esmeralda = document.querySelector(".esmeralda");
let audience = document.querySelector(".audience");
let kingOfFools = document.querySelector(".kingoffools");
let shakingFool = document.querySelector(".shakingfool");
let credits = document.querySelector(".credits");




church_intro.addEventListener('click', showScene01);

function showScene01(){
	scene01.classList.remove("notshowing");
	scene1.classList.add("notshowing");
	
	setTimeout(showScene2, 4000)
}

function showScene2() {
	let dancingAudio = new Audio('audio/2_dance.mp3') //selects document
	dancingAudio.play() //starts music
	scene2.classList.remove("notshowing");
	scene01.classList.add("notshowing");



	setTimeout(stopDancing, 11000)

	function stopDancing() {
		esmeralda.style.display = 'block'
		esDancing.style.display = 'none'
		console.log('stopped dancing');
		let foolsAudio = new Audio('audio/2_kingoffools.mp3');
		foolsAudio.play();
		shakingFool.style.display = 'inline_block'
		kingOfFools.style.display = 'none'
		console.log('shaking');


		setTimeout(playLaugh, 15000)


	}

	function playLaugh() {
		console.log('laugh audio');
		let laughingAudio = new Audio('audio/2_laugh.mp3');
		laughingAudio.play();

		setTimeout(showScene3, 8000)
	}


	function showScene3() {
		console.log('holymusic audio');
		let holyMusicAudio = new Audio('audio/3_holymusic.mp3');
		holyMusicAudio.play();
		console.log('move to scene3');
		scene3.classList.remove("notshowing");
		scene2.classList.add("notshowing");

		setTimeout(evilTalk, 12000)
	}

	function evilTalk() {
		console.log('eviltalk audio');
		let evilTalkAudio = new Audio('audio/3_eviltalk.mp3');
		evilTalkAudio.play();

		setTimeout(showScene4, 10000)

	}


	function showScene4(){
        console.log('chase audio');
		let chaseAudio = new Audio('audio/4_chase.mp3');
		chaseAudio.play();
		console.log('move to scene4');
		scene4.classList.remove("notshowing");
		scene3.classList.add("notshowing");

		setTimeout(showScene5, 11000)
	}



	function showScene5() {
       console.log('crowd audio');
		let crowdTalkAudio = new Audio('audio/5_crowdtalk.mp3');
		crowdTalkAudio.play();
		console.log('move to scene5');
		scene5.classList.remove("notshowing");
		scene4.classList.add("notshowing");

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
		let laughAudio = new Audio('audio/6_laugh.mp3');
		laughAudio.play();
		console.log('move to scene6');
		scene6.classList.remove("notshowing");
		scene5.classList.add("notshowing");

		setTimeout( hbScream, 12000)
	}

	function hbScream (){
		console.log('scream audio');
		let hbScreamAudio = new Audio('audio/6_hbscream.mp3');
		hbScreamAudio.play();

		setTimeout( giveWater, 14000)
	}

	function giveWater(){
		console.log('water audio');
		let waterAudio = new Audio('audio/6_water.mp3');
		waterAudio.play();

		setTimeout (showScene7, 18000)
	}

	function showScene7() {
		console.log('dance audio');
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
	}


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

kingOfFools.classList.add("shaking");

let btn = document.querySelector(".button");

btn.addEventListener('click', showScene3);

function showScene3() {

	scene1.classList.add("notshowing");
}
