import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // var trait = document.getElementById("dessin");
    // trait.transitionDuration = "3s";
    // trait.style.width = "1px";
    // trait.style.backgroundColor = "#87D6E7";

    // trait.style.left = "12vw";
    // trait.style.top = document.getElementById("formation1").offsetTop  + document.getElementById("date").offsetHeight / 2 + "px";
    // trait.style.bottom = document.getElementsByClassName("formation")[0].offsetTop - document.getElementById("date").offsetHeight / 2 + "px";

    // trait.style.height = "50vh";
    var trait = document.getElementById("dessin-trait");
    var point1 = document.getElementById("point1");
    var point2 = document.getElementById("point2");

    trait.style.top = point1.offsetTop + "px";
    // trait.style.bottom = point2.offsetTop + "px";
    // trait.style.height = point2.offsetTop - point1.offsetTop + point2.offsetHeight + "px";
    trait.style.left = (point1.offsetLeft + point1.offsetWidth/2) + "px";


    window.addEventListener("resize", this.resizeTrait);

  }

  resizeTrait(){
    var trait = document.getElementById("dessin-trait");
    var point1 = document.getElementById("point1");
    var point2 = document.getElementById("point2");

    trait.style.top = point1.offsetTop + "px";
    // trait.style.bottom = point2.offsetTop + "px";
    trait.style.height = point2.offsetTop - point1.offsetTop + point2.offsetHeight + "px";
    trait.style.left = (point1.offsetLeft + point1.offsetWidth/2) + "px";
  }
}
