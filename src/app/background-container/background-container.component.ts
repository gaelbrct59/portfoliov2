// import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { PresentationComponent } from './presentation/presentation.component';


@Component({
  selector: 'app-background-container',
  templateUrl: './background-container.component.html',
  styleUrls: ['./background-container.component.css'],
  animations: [
    trigger('test', [
        state('active', style({ opacity:"1" })),
        transition('* => active', animate("3000ms"))
    ])
  ]
})
export class BackgroundContainerComponent implements OnInit {
  value: string= '';

  background: HTMLElement;

  constructor(){

  }


  ngOnInit(){
    // main();
    window.addEventListener('scroll', this.scroll, true);
    this.value="active";
    this.background = document.getElementById("background");


  }
  // scroll(){
  //   var firstDiv = document.getElementById("test").offsetTop;
  //   // console.log(firstDiv);
  //
  // 	var windowHeight = document.documentElement.clientHeight;
  // 		if (window.pageYOffset + windowHeight > firstDiv) {
  // 	      console.log('visible');
  // 		}
  // }

  scroll = (event):void => {
    // var background = document.getElementById("background");
    var taillePage = window.pageYOffset;

    this.changeStyleTopBar();
    this.background.style.opacity = 1 - taillePage/400 + '' ;
    this.background.style.top = + taillePage +'px';
    this.background.style.backgroundPositionY = -+ taillePage/3 + 'px';
    // topbar_lien.style.opacity = taillePage/400 + ''
    document.getElementById("formation-container").style.top = + taillePage +'px';
    document.getElementById("formation-container").style.backgroundPositionY = -+ taillePage *2 + 'px';

    document.getElementById("container-contact").style.top = + taillePage +'px';
    document.getElementById("container-contact").style.backgroundPositionY = -+ taillePage*0.5 + 'px';

    if (taillePage > document.getElementById("apppresentation").offsetTop) {
      document.getElementById("phrase-de-presentation").style.transition = "2.5s";
      document.getElementById("phrase-de-presentation").style.top = "20vh";
      document.getElementById("phrase-de-presentation").style.opacity = "1";



    }

    if (taillePage > document.getElementById("barreProgressionVide").offsetTop) {
      var rempl = document.getElementsByClassName("remplissage") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < rempl.length; i++){

        rempl[i].style.animationName = "avancement";

      }
      document.getElementById("a25").style.width = "25%";
      document.getElementById("a50").style.width = "50%";
      document.getElementById("a75").style.width = "75%";
    }

    if (taillePage > document.getElementById("formations").offsetTop + 10) {
      this.animateFormation();
    }

    if (taillePage > document.getElementById("container-projets").offsetTop) {
      this.animateProjets();
    }

    if (taillePage > document.getElementById("pres-git").offsetTop + document.getElementById("container-projets").offsetTop){
      document.getElementById("pres-git").style.marginLeft = "5vw";
      document.getElementById("pres-git").style.opacity = "1";

      document.getElementById("anim-chat").style.marginLeft = "5vw";
      document.getElementById("anim-chat").style.opacity = "1";

    }

    if(taillePage > document.getElementById("container-contact").offsetTop) {
      this.animateContact();
    }

  }

  animateContact(){
    document.getElementById("via-reseau").style.marginLeft = "5vw";
    document.getElementById("via-reseau").style.opacity = "1";

    document.getElementById("container-reseaux").style.marginLeft = "15vw";
    document.getElementById("container-reseaux").style.opacity = "1";
  }

  animateProjets(){
    // document.getElementById("barre-projet").style.marginTop = "0";
    document.getElementById("barre-projet").style.opacity = "1";

    // var projets = document.getElementsByClassName("projet") as HTMLCollectionOf<HTMLElement>;

    // for (let i = 0; i < document.getElementsByClassName("projet").length; i++) {
    //   projets[i].style.opacity = "1";
    // }
  }



  animateFormation(){
    var element = document.getElementsByClassName('formation') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < element.length; i++) {
      element[i].style.left = "20vw";
      element[i].style.opacity = "1";
    }
  }

  changeStyleTopBar(){
    var links = document.getElementById('topbar-liens').getElementsByTagName("a");
    var topbar_lien = document.getElementById("topbar-liens");
    if(document.documentElement.scrollTop > 200){
      topbar_lien.style.background="#656563";
      topbar_lien.style.padding="0.7vw 0px";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color="white";
        links[i].style.padding="0 4vw 0 4vw";
        links[i].style.fontSize="calc(5px + 1.2vw)";
      }

    }else{
      topbar_lien.style.background="none";
      topbar_lien.style.padding="5vmin 0px";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color="#656563";
        links[i].style.padding="0.7vw";
        links[i].style.fontSize="calc(5px + 1.7vw)";

      }
    }
  }


}
// export var tailleContainer = document.getElementById('background-img').style.height
