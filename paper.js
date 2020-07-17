class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.image = loadImage("paper.png")
		this.body=Bodies.circle(x,y,r, options)
		this.radius = r;
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
var angle = this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			imageMode(CENTER)
			image(this.image,0,0,this.radius,this.radius)
		//	rectMode(CENTER)
		//	strokeWeight(3);
		//	fill(255,0,255)
		//	ellipse(0,0,this.r, this.r);
			pop()
			
	}

}