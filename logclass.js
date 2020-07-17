class log
{
	constructor(x,y)
	{

var options = {
	isStatic:true
}
		this.bottomBody=Bodies.rectangle(x,y,200,70,options)
		this.wallThickness=200
		this.dustbinHeight=70
World.add(world,this.bottomBody)
	}
	
	display()
	{
			var pos = this.body.position
var angle = this.body.angle;
			

			push()
			translate(pos.x , pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
		fill(255)
			stroke(255)
			rotate(angle)
	//		imageMode(CENTER)
	//		image(this.image,0,0,this.width,this.height)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			
			
	}


	
}