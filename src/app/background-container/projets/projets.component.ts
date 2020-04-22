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
    main();

    document.getElementById("projet-II2D").addEventListener("click", this.openlinkII2D, true);
    document.getElementById("projet-react").addEventListener("click", this.openlinkreact, true);
    document.getElementById("stage2018").addEventListener("click", this.modalStage2018, true);
    document.getElementById("stage2017").addEventListener("click", this.modalStage2017, true);
    document.getElementById("projets-perso").addEventListener("click", this.triPP, true);
    document.getElementById("projets-cours").addEventListener("click", this.triPC, true);
    document.getElementById("projets-tout").addEventListener("click", this.triAll, true);

    var closemodals = document.getElementsByClassName("close-modal");
    for (let i = 0; i < closemodals.length; i++) {
      closemodals[i].addEventListener("click", this.closeModal, true);
    }

    var modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      modals[i].addEventListener("click", function test(event) {
        for (let i = 0; i < modals.length; i++) {
          if(event.target == modals[i]){
            document.getElementById(modals[i].id).style.display = "none";
          }
        }
      }, true);
    }
  }


  openlinkII2D(){
    window.open("https://gaelbrct59.github.io/images-et-interactions-projets/");
  }
  openlinkreact(){
    window.open("https://gael-bricout.herokuapp.com/");
    // document.getElementById("projet-react").style.display = "none";
  }

  modalStage2018(){
    document.getElementById("modalStage2018").style.display = "block";
  }

  modalStage2017(){
    document.getElementById("modalStage2017").style.display = "block";
  }

  closeModal(){
    var modals = document.getElementsByClassName("modal") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < modals.length; i++) {
      if(modals[i].style.display == "block"){
        document.getElementById(modals[i].id).style.display = "none";
      }

    }
  }

  triPP(){
    var persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    var cours = document.getElementsByClassName("professionnel") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < persos.length; i++) {
      persos[i].style.display = "block";
    }

    for (let i = 0; i < cours.length; i++) {
      cours[i].style.display = "none";
    }

  }
  triPC(){
    var persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    var cours = document.getElementsByClassName("professionnel") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < persos.length; i++) {
      persos[i].style.display = "none";
    }

    for (let i = 0; i < cours.length; i++) {
      cours[i].style.display = "block";
    }
  }

  triAll(){
    var persos = document.getElementsByClassName("perso") as HTMLCollectionOf<HTMLElement>;
    var cours = document.getElementsByClassName("professionnel") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < persos.length; i++) {
      persos[i].style.display = "block";
    }

    for (let i = 0; i < cours.length; i++) {
      cours[i].style.display = "block";
    }

  }

}
