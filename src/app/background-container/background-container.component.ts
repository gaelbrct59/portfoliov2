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
  timer;

  background: HTMLElement;

  constructor(){

  }


  ngOnInit(){
    
    window.addEventListener("load", this.charged);

    window.addEventListener('scroll', this.scroll, true);
    this.value="active";
    this.background = document.getElementById("background");
    this.timer = setInterval(() => {
      if (document.getElementById("loader").classList[0] != "hidden") {
        this.charged();
        window.removeEventListener("load", this.charged);
      }
    }, 7000);
  }


  charged(){
      clearInterval(this.timer);

      document.getElementById("loader").className += "hidden";

      document.getElementById("welcome").className += "appear";
      document.getElementById("gael").className += "appear2";
      document.getElementById("trait-milieu").className += "tracer";

      document.getElementById("topbar-liens").className += "appearTopBar";

      document.getElementById("container-fleche-presentation").style.bottom = "3.6vh";

  }

  scroll = (event):void => {
    // var background = document.getElementById("background");
    var taillePage = window.pageYOffset;

    this.changeStyleTopBar();
    this.parallaxItems(taillePage);

    // if (taillePage > document.getElementById("apppresentation").offsetTop && taillePage < document.getElementById("barreProgressionVide").offsetTop) {
    //   this.animatePhrasePresentation();
    // }else if(taillePage < document.getElementById("formations").offsetTop + 10){
    //   this.animateComp();
    // }else if(taillePage < document.getElementById("container-projets").offsetTop){
    //   this.animateFormation();
    // }else if(taillePage < document.getElementById("pres-git").offsetTop + document.getElementById("container-projets").offsetTop){
    //   this.animateProjets();
    // }else if(taillePage < document.getElementById("container-contact").offsetTop){
    //   this.animateGitLogo();
    // }else if(taillePage < document.getElementById("via-reseau").offsetTop){
    //   this.animateContact();
    // }else if(taillePage < document.getElementById("via-site").offsetTop){
    //   this.animateViaReseau();
    // }else if(taillePage < document.getElementById("container-footer").offsetTop){
    //   this.animateViaSite();
    // }else{
    //   this.animateFooter();
    // }


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

    if (taillePage > document.getElementById("via-reseau").offsetTop) {
      this.animateContact();
    }

    if(taillePage > document.getElementById("via-site").offsetTop) {
      this.animateViaSite();
    }

    if (taillePage > document.getElementById("container-footer").offsetTop ){
      this.animateFooter();
    }



  }

  animateViaSite(){
    document.getElementById("via-site").style.animation = "write 2s steps(17)"
    document.getElementById("via-site").style.width = "15ch";
  }

  animateContact(){
    // document.getElementById("via-reseau").style.marginLeft = "5vw";
    // document.getElementById("via-reseau").style.opacity = "1";

    document.getElementById("via-reseau").style.animation = "write 2s steps(17)"
    document.getElementById("via-reseau").style.width = "15.5ch";

    document.getElementById("contact").style.animation = "appear 2s";
    document.getElementById("contact").style.bottom = "0";

    document.getElementById("container-reseaux").style.marginLeft = "15vw";
    document.getElementById("container-reseaux").style.opacity = "1";
  }

  animateProjets(){
    // document.getElementById("barre-projet").style.marginTop = "0";
    document.getElementById("barre-projet").style.opacity = "1";

    var projets = document.getElementsByClassName("projet") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < projets.length; i++) {
      // projets[i].style.opacity = "1";
      projets[i].className += " dispProjets";
    }
  }

  animateComp(){
    document.getElementById("competence").style.animation = "appear 2s forwards";

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
    document.getElementById("formation").style.animation = "appear 2s forwards";

    var dates = document.getElementsByTagName("h3") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < dates.length; i++) {
      dates[i].className += " appearDate";
    }

    var contenus = document.getElementsByClassName("formation-contenu") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < contenus.length; i++) {
      contenus[i].className += " appearContenu";
    }
    var trait = document.getElementById("dessin-trait");
    var point1 = document.getElementById("point1");
    var point2 = document.getElementById("point2");
    trait.style.height = point2.offsetTop - point1.offsetTop + point2.offsetHeight + "px";

    var logoFormations = document.getElementsByClassName("logo-formations") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < logoFormations.length; i++) {
      logoFormations[i].className += " appearLogoFormation";
    }


    // document.getElementById("logoFormation").style.left = "2vw";
    // document.getElementById("logoDiplome").style.right = "30vw";
  }

  animateGitLogo(){
    document.getElementById("pres-git").style.marginLeft = "5vw";
    document.getElementById("pres-git").style.opacity = "1";

    document.getElementById("anim-chat").style.marginLeft = "5vw";
    document.getElementById("anim-chat").style.opacity = "1";
  }

  animatePhrasePresentation(){
    document.getElementById("phrase-de-presentation").style.transition = "2.5s";
    document.getElementById("phrase-de-presentation").style.top = "calc(21vh - 25px)";
    document.getElementById("phrase-de-presentation").style.opacity = "1";
  }

  changeStyleTopBar(){
    var links = document.getElementById('topbar-liens').getElementsByTagName("a");
    var topbar_lien = document.getElementById("topbar-liens");
    if(document.documentElement.scrollTop > 200){
      topbar_lien.style.background="rgba(65,65,63,0.95)";
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

  animateFooter(){
    document.getElementById("footer-pres").style.bottom = "0";
    document.getElementById("footer-pres").style.animation = "appear 2s";
  }

  parallaxItems(taillePage){
    this.background.style.opacity = 0.80 - taillePage/600 + '' ;
    this.background.style.top = + taillePage +'px';
    this.background.style.backgroundPositionY = -+ taillePage/4.5 + 'px';
    // topbar_lien.style.opacity = taillePage/400 + ''
    document.getElementById("formation-container").style.top = + taillePage +'px';
    document.getElementById("formation-container").style.backgroundPositionY = -+ taillePage *0.5 + 'px';
    // var parallaxLogo = (taillePage - document.getElementById("formation-container").offsetTop - document.getElementById("formation-container").offsetHeight/2)*0.6;
    // var parallaxLogo2 = (taillePage - document.getElementById("formation-container").offsetTop - document.getElementById("formation-container").offsetHeight/2)*0.45 + 30;
    // if (parallaxLogo>-40) {
    //   document.getElementById("logoFormation").style.transform = "translateY(" + parallaxLogo + "px)";
    // }
    // if (parallaxLogo2>50) {
    //   document.getElementById("logoDiplome").style.transform = "translateY(" + parallaxLogo2 + "px)";
    // }

    //
    // document.getElementById("container-contact").style.top = + taillePage +'px';
    // document.getElementById("container-contact").style.backgroundPositionY = -+ taillePage*0.5 + 'px';

  }

  scrollToPresentation(){
    window.scrollTo({
      top: document.getElementById("presentation").offsetTop,
      left:0
    });
  }


}
// export var tailleContainer = document.getElementById('background-img').style.height
