window.onload = function()
{
	console.log('ready');
};

window.onload = function() {
  var c = document.getElementById("imageView");
  var ctx = c.getContext("2d");
  var img = document.getElementById("HoodieFront");
  ctx.drawImage(img, 10, 10);
};

if (window.addEventListener) {
   window.addEventListener('load', function() { init(); });
}

var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';
var enableDraw = false;
 
function init() {
    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');
	
    // Auto-adjust canvas size to fit window.
    canvas.width  = window.innerWidth - 75;
    canvas.height = window.innerHeight - 75;
	
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);
	canvas.addEventListener('mousedown', function(e) { enableDraw = true; }, false); 
    canvas.addEventListener('mouseup', function(e) { enableDraw = false; started = false; }, false); 
    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#pink').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#fuchsia').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#orange').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#yellow').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#lime').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#green').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#blue').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#purple').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#black').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#white').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#save').get(0).addEventListener('click', function(e) { onSave(); }, false);
}


function onMouseMove(ev) {
    var x, y;
        x = ev.layerX ;
        y = ev.layerY ;
	if (enableDraw) {
		if (!started) { 
			started = true; 
			context.beginPath(); 
			context.moveTo(x, y); 
		} 
	else { 
    context.lineTo(x, y); 
    context.stroke(); 
    }
}
    $('#stats').text(x + ', ' + y);
}


function onClick(e) {
    if (stampId.length > 0) {
        context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
    }
}

function onColorClick(color) {
    context.closePath();
    context.beginPath();
    context.strokeStyle = color;

    var borderColor = 'white';
    if (color == 'white' || color == 'yellow') {
        borderColor = 'black';
    }
    $('#' + lastColor).css("border", "0px dashed white");
    $('#' + color).css("border", "1px dashed " + borderColor);
    lastColor = color;
}

function onSave() {
	
}












