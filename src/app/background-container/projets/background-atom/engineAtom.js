/**
 * Classe engine
 *
 * */
import { AtomManager } from './atom.js';
import { Vector } from './primitives.js';
import { canvas, ctx } from './mainAtom.js'
var anim;
export var randInt=function(a,b) {
	return Math.floor(Math.random()*(b-a)+a);
}

var setAttributes=function(v,lAttrib) {
  for(var k in lAttrib) {
    v[k]=lAttrib[k];
  }
}
var average = function(dataArray)
{
	var av = 0;
	for(var i = 0;i<dataArray.length;i++)
	{
		av += dataArray[i];
	}
	return av/dataArray.length;
}

export class EngineAtom {
  constructor() {
    this.time=0;
    this.deltaTime=0.1;
    this.atom = new AtomManager();
		this.neighbourMouse = [];
		this.mouse = new Vector(0,0);
  }

  init()
  {
    this.atom.init();
  }

  draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle = "#E7ECEF";
		ctx.fillRect(0,0,canvas.width,canvas.height)
    this.atom.draw();
		this.drawNeighbourMouse();

  }
	stopAnimation(){
		window.cancelAnimationFrame(anim);
	}
  updateData() {
    this.atom.update();
		// this.updateMouse()
  }

	updateMouse()
	{
		this.neighbourMouse = [];
		this.atom.atoms.forEach(a1 =>
		{
			if (a1.distance(this.mouse) < a1.diameterSegment)
			{
				// console.log(mouse.distance(a1.position));
				this.neighbourMouse.push(a1);
			}
		});
	}

	drawNeighbourMouse()
	{
		this.neighbourMouse.forEach(atom => {
			// atom.drawSegment(this.mouse);
			ctx.beginPath();       // Start a new path
			ctx.moveTo(this.mouse.x, this.mouse.y);
			ctx.lineTo(atom.position.x, atom.position.y);
			var x = atom.distance(this.mouse);
			if (x < 50){
				x = 50
			}
			ctx.lineWidth= atom.diameterSegment/x;
			ctx.strokeStyle = "#06127B";
			ctx.stroke();
		});

	}

  loop() {
    this.time+=this.deltaTime;
    this.updateData();
    this.draw();
    anim = window.requestAnimationFrame(this.loop.bind(this));
}

  start() {
    this.init();
    this.loop();
  }


}
