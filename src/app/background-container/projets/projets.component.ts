import { Component, OnInit } from '@angular/core';
import { main } from './background-atom/mainAtom.js';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // if(document.documentElement.clientWidth > 400){ //Eviter les lags sur téléphone
      main();
    // }

    document.getElementById("projet-II2D").addEventListener("click", this.openlinkII2D, true);
    document.getElementById("projet-react").addEventListener("click", this.openlinkreact, true);
    document.getElementById("stage2018").addEventListener("click", this.modalStage2018, true);
    document.getElementById("stage2017").addEventListener("click", this.modalStage2017, true);
    document.getElementById("barre-projet").addEventListener("click", this.toggle, true);
    document.getElementById("appmealist").addEventListener("click", this.openlinkmealist, true);
    // document.getElementById("projets-cours").addEventListener("click", this.toggle, true);
    // document.getElementById("projets-tout").addEventListener("click", this.toggle, true);

    // for (let i = 0; i < closemodals.length; i++) {
    //   closemodals[i].addEventListener("click", this.closeModal, true);
    // }

    var modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      modals[i].addEventListener("click", this.closeModal, true);
    }
  }


  openlinkII2D(){
    window.open("https://gaelbrct59.github.io/images-et-interactions-projets/");
  }
  openlinkreact(){
    window.open("https://gael-bricout.herokuapp.com/");
    // document.getElementById("projet-react").style.display = "none";
  }

  openlinkmealist(){
    window.open("https://github.com/gaelbrct59/mealist");
  }

  modalStage2018(){
    document.getElementById("modalStage2018").style.height = "90%";
    document.getElementById("modalStage2018").style.opacity = "1";
  }

  modalStage2017(){
    document.getElementById("modalStage2017").style.opacity = "1";
    document.getElementById("modalStage2017").style.height = "90%";
  }

  closeModal(e){
    if (e.target.className.baseVal == "close-modal-circle" || e.target.className == "modal" || e.target.className.baseVal == "close-modal-cross") {
      var modals = document.getElementsByClassName("modal") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < modals.length; i++) {
        document.getElementById(modals[i].id).style.height = "0";
        document.getElementById(modals[i].id).style.opacity = "0";

      }
    }
  }

  toggle(event): void{
    // console.log(event.target);
    var persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    var cours = document.getElementsByClassName("professionnel") as HTMLCollectionOf<HTMLElement>;
    var projets = document.getElementsByClassName("projet") as HTMLCollectionOf<HTMLElement>;

    function dispPersos (){
      for (let i = 0; i < persos.length; i++) {
        persos[i].style.height = "calc(220px + 10vw)";
        persos[i].style.width = "calc(130px + 10vw)";
        persos[i].style.border = "solid";
        persos[i].style.margin = "1vw";
        persos[i].style.boxShadow = "1px 1px 15px 5px rgba(0,0,0,0.58)";
        persos[i].style.opacity = "1";

      }

      for (let i = 0; i < cours.length; i++) {
        cours[i].style.height = "0";
        cours[i].style.width = "0";
        cours[i].style.border = "none";
        cours[i].style.margin = "0";
        cours[i].style.boxShadow = "none";
        cours[i].style.opacity = "0";
      }
    }

    function dispProf(){
      for (let i = 0; i < persos.length; i++) {
        persos[i].style.height = "0";
        persos[i].style.width = "0";
        persos[i].style.margin = "0";
        persos[i].style.border = "none";
        persos[i].style.boxShadow = "none";
        persos[i].style.opacity = "0";
      }

      for (let i = 0; i < cours.length; i++) {
        cours[i].style.height = "calc(220px + 10vw)";
        cours[i].style.width = "calc(130px + 10vw)";
        cours[i].style.border = "solid";
        cours[i].style.margin = "1vw";
        cours[i].style.boxShadow = "1px 1px 15px 5px rgba(0,0,0,0.58)";
        cours[i].style.opacity = "1";

      }
    }

    function toutAfficher(){
      for (let i = 0; i < projets.length; i++) {
        projets[i].style.height = "calc(220px + 10vw)";
        projets[i].style.width = "calc(130px + 10vw)";
        projets[i].style.border = "solid";
        projets[i].style.margin = "1vw";
        projets[i].style.boxShadow = "1px 1px 15px 5px rgba(0,0,0,0.58)";
        projets[i].style.opacity = "1";
      }
    }

    if(event.target.id == "projets-perso"){
      dispPersos();
    }else if(event.target.id == "projets-cours"){
      dispProf();
    }else{
      toutAfficher();
    }
  }


}
