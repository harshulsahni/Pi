var r;
var points = [];
var pointsInCircle = [];
function setup(){
	createCanvas(300,300);
	background(40, 42, 45);

	r = width/2;
	translate(width/2, height/2);

	stroke(255,255,255);
	noFill();
	strokeWeight(3);
	ellipse(0, 0, r*2, r*2);
	strokeWeight(1);
}

function draw(){
	strokeWeight(2);
	translate(width/2, height/2);
	noFill();
	for(var j=0; j<3; j++){
		pointsInCircle = [];
		points.push(new Point(random(-r,r),random(-r,r)));
		drawPoints();
	}
	console.log(calculatePi());
}
function drawPoints(){
	for (var i=0; i<points.length; i++){
		points[i].draw();
	}
}
function calculatePi(){
	if(points.length == 0){
		return 0;
	}
	else return 4*pointsInCircle.length/points.length;
}
function keyPressed(){
	if(key == ' '){
		noLoop();
	}
}