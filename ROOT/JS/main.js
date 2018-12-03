$(document).ready(function(){
	console.log("ready!");

	
var background_colour = $('#selColour').val();
localStorage.getItem('background');

if(localStorage && localStorage.getItem('background')){
var colour = localStorage.getItem('background');
alert('colour should be '+colour);
// change css background colour
}

$('#selColour').change(function() {

// change the body css backround
// set the local storage
localStorage.setItem("name", value);
});	

	
var canvas = document.getElementById("picker");
var context = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 100;
var counterClockwise = false;

for(var angle=0; angle<=360; angle+=1){
    var startAngle = (angle-1)*Math.PI/180;
    var endAngle = angle * Math.PI/180;
    context.beginPath();
    context.moveTo(x, y);
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.closePath();
    context.fillStyle = 'hsl('+angle+', 100%, 50%)';
    context.fill();
}
	
	
	});


   
