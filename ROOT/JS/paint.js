window.onload = function() {
    console.log('ready');
}

if (window.addEventListener) {
   window.addEventListener('load', function() { init(); });
}

// Declaring all the variables being used
started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';
var enableDraw = false;
 
 // Main draw function, draws when mouse down and constantly udpates with mouse postion
function init() {
    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');
	
    canvas.width  = window.innerWidth - 75;
    canvas.height = window.innerHeight - 75;
	
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);
	canvas.addEventListener('mousedown', function(e) { enableDraw = true; }, false); 
    canvas.addEventListener('mouseup', function(e) { enableDraw = false; started = false; }, false); 

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

// Fucntion allowing the user to pick the colour and draw with the matching colour.
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

// Sending the canvas into a black page and converting it to a png. Then automatically downloading it for the user. Sends them back to the previous page.
function onSave() {
    var img = canvas.toDataURL("image/png");
    document.write('<img src="' + img + '"/>');
	download(canvas, 'myimage.png');
	history.go(-1);
}

// Function for the download, when clicked.
function download(canvas, filename) {

  var lnk = document.createElement('a'), e;

  lnk.download = filename;
  lnk.href = canvas.toDataURL("image/png;base64");

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}













