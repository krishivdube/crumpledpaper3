class dustbin
{
	constructor(x,y)
	{
		var options = {
			isStatic:true
		}
		
		this.body = Bodies.rectangle(x,y,100,200,options)
		this.width = 100
		this.height = 200
		this.image = loadImage ("dustbingreen.png")
		World.add(world,this.body)
	}
	display()
	{
			var pos = this.body.position
var angle = this.body.angle;
			

			push()
			translate(pos.x , pos.y);
		//	rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
		//	fill(255)
			//stroke(255)
			rotate(angle)
			imageMode(CENTER)
			image(this.image,0,0,this.width,this.height)
		//	rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			
			
	}

}