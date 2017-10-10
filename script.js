canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

guessX = 0; //stores user's click on canvas
guessY = 0; //stores user's click on canvas
function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

/*c.moveTo(150,100);
c.lineTo(150,200);
c.lineTo(50,200);
c.lineTo(50,100);
c.moveTo(150,100);
c.lineTo(75,0);
c.moveTo(50,100);
c.lineTo(125,0);
c.moveTo(150,100);
c.lineTo(100,100);
c.lineTo(50,100);
c.moveTo(75,175);
c.lineTo(75,130);
c.lineTo(120,130);
c.moveTo(120,130);
c.lineTo(120,175);
c.lineTo(75,175);
c.stroke();*/

function rutulys() {

for (var i = 0; i < 1; i++) {

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;

c.beginPath();
c.arc(x,y,100*Math.random()+1,0,2*Math.PI);
c.strokeStyle=getRndColor();
c.stroke();


function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
}
}

x = 100;
y = 50;
dx = 6;
dy = 5;
radius = 20; 

function Circle(x) {
	this.x = x;
	this.y = y;

	this.draw = function () {
	c.beginPath();
	c.arc(x,y,radius,0,2*Math.PI);
	c.fillStyle = "violet";
	c.fill();
	}
}

var circle = new Circle(200, 200);




function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	circle.draw();

	c.beginPath();
	c.arc(x,y,radius,0,2*Math.PI);
	c.fillStyle = "violet";
	c.fill();

	if (x + radius >= innerWidth || x - radius <= 0) {
		dx = -dx;
	}

	if ( y + radius > innerHeight || y - radius < 0) {
		dy = -dy;
	}

	x += dx;
	y += dy;
}

animate();

