import { EngineAtom } from './engineAtom.js';
// import { tailleContainer } from '../background-container.component';
export var canvas;
export var ctx; // !!! context 2D (drawing)
var engine;



// window.addEventListener("load",main);

export function main() {
    // console.log(tailleContainer + "salut");
   	canvas=document.getElementById("canvas");
  	ctx=canvas.getContext("2d");
    // canvas.addEventListener('mousemove',handleMouseMove,false);
    ctx.canvas.width  = document.getElementById("global-container").offsetWidth-0.1;
    ctx.canvas.height = document.getElementById("container-projets").offsetHeight;
    window.addEventListener("resize", resize, false);
    // canvas.addEventListener('mousedown',handleMouseDown,false);
    engine=new EngineAtom();
    // engine.foxes.test = Math.random();
    engine.start();
}

function resize(){
  ctx.canvas.width  = document.getElementById("global-container").offsetWidth-0.1;
  ctx.canvas.height = document.getElementById("container-projets").offsetHeight;
  engine.atom.atoms.forEach(atom => {
    atom.width = 3;
  });

}

//
// file.onchange = function()
// {
//   var files = this.files;
//   audio.src = URL.createObjectURL(files[0]);
//   engine.music.audio = audio;
//   engine.music.init();
// }
//
// function handleMouseMove(event) {
//   var mouseX = event.layerX;
//   var mouseY = event.layerY;
//   engine.mouse.x = mouseX;
//   engine.mouse.y = mouseY;
// }
