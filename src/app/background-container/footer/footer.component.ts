import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("voirPDF").addEventListener("click", this.dispModal, true);
  }


  dispModal(){
    document.getElementById("modalCV").style.display ="block";
  }

}
