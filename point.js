function Point(x, y){
	this.x = x;
	this.y = y;
	this.inCircle = false;

	this.draw = function(){
		if(dist(0,0,this.x, this.y) < r){
			stroke(255, 255, 255);
			pointsInCircle.push(this);
		}
		else{
			stroke(255, 128, 128);
		}
		point(this.x, this.y);
	}
}