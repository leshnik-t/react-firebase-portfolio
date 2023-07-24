// JavaScript Document
var globalTimerStart = new Date().getTime(),
	globalTimerTime = 0,
	countupTime = 421668166, //(h) + (m) + s
	timer;
	
function globalTimer() {
	globalTimerTime += 300;
	
	var diff = (new Date().getTime() - globalTimerStart) - globalTimerTime;
	timer = window.setTimeout( function(){
		globalTimer();
	},(1000 - diff));
		
	displayTime();
}
function displayTime() {
	countupTime += 1;
	
	$("h2#counter").html(countupTime);
	
	if(countupTime > 423668176 ){
		clearTimeout(timer);
	}
}