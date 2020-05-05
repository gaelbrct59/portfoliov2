// import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { PresentationComponent } from './presentation/presentation.component';


@Component({
  selector: 'app-background-container',
  templateUrl: './background-container.component.html',
  styleUrls: ['./background-container.component.css'],
})
export class BackgroundContainerComponent implements OnInit {
  value: string= '';

  background: HTMLElement;

  constructor(){

  }


  ngOnInit(){
    // main();
    window.addEventListener("load", this.charged);

    window.addEventListener('scroll', this.scroll, true);
    this.value="active";
    this.background = document.getElementById("background");
    // document.getElementById("logoFormation").style.top = document.getElementById("formation-container").offsetTop + 'px';
  }

  charged(){
    document.getElementById("loader").className += "hidden";

    document.getElementById("welcome").className += "appear";
    document.getElementById("gael").className += "appear2";
    document.getElementById("trait-milieu").className += "tracer";

    document.getElementById("topbar-liens").className += "appearTopBar";
  }

  scroll = (event):void => {
    // var background = document.getElementById("background");
    var taillePage = window.pageYOffset;

    this.changeStyleTopBar();
    this.background.style.opacity = 0.80 - taillePage/600 + '' ;
    this.background.style.top = + taillePage +'px';
    this.background.style.backgroundPositionY = -+ taillePage/4.5 + 'px';
    // topbar_lien.style.opacity = taillePage/400 + ''
    document.getElementById("formation-container").style.top = + taillePage +'px';
    document.getElementById("formation-container").style.backgroundPositionY = -+ taillePage *0.5 + 'px';

    document.getElementById("container-contact").style.top = + taillePage +'px';
    document.getElementById("container-contact").style.backgroundPositionY = -+ taillePage*0.5 + 'px';

    if (taillePage > document.getElementById("apppresentation").offsetTop) {
      this.animatePhrasePresentation();
    }

    if (taillePage > document.getElementById("barreProgressionVide").offsetTop) {
      this.animateComp();
    }

    if (taillePage > document.getElementById("formations").offsetTop + 10) {
      this.animateFormation();
    }

    if (taillePage > document.getElementById("container-projets").offsetTop) {
      this.animateProjets();
    }

    if (taillePage > document.getElementById("pres-git").offsetTop + document.getElementById("container-projets").offsetTop){
      this.animateGitLogo();
    }

    if(taillePage > document.getElementById("container-contact").offsetTop) {
      this.animateContact();
    }

    if (taillePage > document.getElementById("via-reseau").offsetTop) {
      this.animateViaReseau();
    }

    if(taillePage > document.getElementById("via-site").offsetTop) {
      this.animateViaSite();
    }

    if (taillePage > document.getElementById("container-footer").offsetTop ){
      document.getElementById("footer-pres").style.bottom = "0";
      document.getElementById("footer-pres").style.animation = "appear 2s";
    }



  }

  animateViaSite(){
    document.getElementById("via-site").style.animation = "write 2s steps(17)"
    document.getElementById("via-site").style.width = "15ch";
  }

  animateContact(){
    // document.getElementById("via-reseau").style.marginLeft = "5vw";
    // document.getElementById("via-reseau").style.opacity = "1";

    document.getElementById("contact").style.animation = "appear 2s";
    document.getElementById("contact").style.bottom = "0";

    document.getElementById("container-reseaux").style.marginLeft = "15vw";
    document.getElementById("container-reseaux").style.opacity = "1";
  }

  animateViaReseau(){
    document.getElementById("via-reseau").style.animation = "write 2s steps(17)"
    document.getElementById("via-reseau").style.width = "15.5ch";
  }


  animateProjets(){
    // document.getElementById("barre-projet").style.marginTop = "0";
    document.getElementById("barre-projet").style.opacity = "1";
    const imgs = document.getElementsByTagName("img") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.marginLeft = "0";

    }
    // var projets = document.getElementsByClassName("projet") as HTMLCollectionOf<HTMLElement>;

    // for (let i = 0; i < document.getElementsByClassName("projet").length; i++) {
    //   projets[i].style.opacity = "1";
    // }
  }

  animateComp(){
    document.getElementById("competence").style.animation = "appear 2s";
    document.getElementById("competence").style.bottom = "0";

    var contenusComp = document.getElementsByClassName("contenuComp") as HTMLCollectionOf<HTMLElement>;
    var rempl = document.getElementsByClassName("remplissage") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < rempl.length; i++){

      rempl[i].style.animationName = "avancement";

    }
    document.getElementById("a25").style.width = "25%";
    document.getElementById("a50").style.width = "50%";
    document.getElementById("a75").style.width = "75%";

    for (let i = 0; i < contenusComp.length; i++) {
      contenusComp[i].style.marginTop = "1vmin";
      contenusComp[i].style.opacity = "1";

    }

    // document.getElementsByClassName("contenuComp").marginTop = "1vmin";
    // document.getElementsByClassName("contenuComp").opacity = "1";
  }



  animateFormation(){
    document.getElementById("formation").style.bottom = "0";
    document.getElementById("formation").style.animation = "appear 2s";
    var element = document.getElementsByClassName('formation') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < element.length; i++) {
      element[i].style.left = "20vw";
      element[i].style.opacity = "1";
    }
  }

  animateGitLogo(){
    document.getElementById("pres-git").style.marginLeft = "5vw";
    document.getElementById("pres-git").style.opacity = "1";

    document.getElementById("anim-chat").style.marginLeft = "5vw";
    document.getElementById("anim-chat").style.opacity = "1";
  }

  animatePhrasePresentation(){
    document.getElementById("phrase-de-presentation").style.transition = "2.5s";
    document.getElementById("phrase-de-presentation").style.top = "20vh";
    document.getElementById("phrase-de-presentation").style.opacity = "1";
  }

  changeStyleTopBar(){
    var links = document.getElementById('topbar-liens').getElementsByTagName("a");
    var topbar_lien = document.getElementById("topbar-liens");
    if(document.documentElement.scrollTop > 200){
      topbar_lien.style.background="#656563";
      topbar_lien.style.padding="1vw 0px";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color="white";
        links[i].style.padding="0 3vw 0 3vw";
        links[i].style.fontSize="calc(5px + 1.2vw)";
      }

    }else{
      topbar_lien.style.backgroundColor="rgba(255, 255, 255, 0.4)";
      topbar_lien.style.padding="5vmin 0px";

      for (let i = 0; i < links.length; i++) {
        links[i].style.color="#000";
        links[i].style.padding="0.6vw";
        links[i].style.fontSize="calc(5px + 1.7vw)";

      }
    }
  }


}
// export var tailleContainer = document.getElementById('background-img').style.height
