import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  // template: ``,
  animations: [
    trigger('switchPresentations', [
      state('1', style({
          left:"6vw"
      })),
      state('2', style({
          left:"-177vw"
      })),
      state('3', style({
          left:"-362vw"
      })),
      state('4', style({
          left:"-545.5vw"
      })),
      transition('* <=> *', animate("400ms")),

  ])],
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  value = "0";
  valueCheckbox = new String("");
  timer;

  checkBox1: HTMLInputElement;
  checkBox2: HTMLInputElement;
  checkBox3: HTMLInputElement;
  checkBox4: HTMLInputElement;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("resize", this.resizeCheck);
    this.valueCheckbox = "inactive";
    this.value = "1";

    this.checkBox1 = <HTMLInputElement> document.getElementById("check1");
    this.checkBox2 = <HTMLInputElement> document.getElementById("check2");
    this.checkBox3 = <HTMLInputElement> document.getElementById("check3");
    this.checkBox4 = <HTMLInputElement> document.getElementById("check4");

    if(document.documentElement.clientWidth < 400){
      document.getElementById("flechePresentation").style.left = "10vw";
      document.getElementById('background').style.backgroundSize = "180%";

      // document.getElementById('phrase-presentation').style.top = document.documentElement.offsetHeight / 3 + "px";
      // document.getElementById('phrase-presentation').style.left = "5px";
      // document.getElementById('phrase-presentation').style.right = "5px";
    }

    var checks = document.getElementsByClassName('checkBoxesWH') as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checks.length; i++) {
      checks[i].style.width = (document.documentElement.clientWidth / 4) - 10 + "px";
    }

    this.timer = setInterval(() => {
        let increaseValue: string = String(parseInt(this.value) + 1 + "");
        if (increaseValue == "5") {
          increaseValue = "1";
        }
        this.changeCheck(increaseValue);
    }, 9000);

  }

  resizeCheck(){
    var checks = document.getElementsByClassName('checkBoxesWH') as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checks.length; i++) {
      checks[i].style.width = (document.documentElement.clientWidth / 4) - 10 + "px";
    }
  }

  // animateCheck(){
  //   var firstDiv = document.getElementById('phrase-de-presentation').offsetTop;
  //   const element = document.querySelector('app-presentation');
  //   // console.log(document.querySelector('app-presentation').offsetTop);
  //   // console.log(window.pageYOffset);
  //   // console.log(firstDiv);
  //   if(element != null && element instanceof HTMLElement) {
  //     if (window.pageYOffset > element.offsetTop) {
  //       console.log(this.valueCheckbox);
  //       this.valueCheckbox = "active";
  //     }
  //   }
  //
  // }

  toggle1(){
    // this.value="1";
    this.changeCheck("1");
    clearInterval(this.timer);
    // this.checkBox2.checked=false;
    // this.checkBox3.checked=false;
    // this.checkBox4.checked=false;
  }
  toggle2(){
    // this.value="2";
    this.changeCheck("2");
    clearInterval(this.timer);

    // this.checkBox1.checked=false;
    // this.checkBox3.checked=false;
    // this.checkBox4.checked=false;
  }
  toggle3(){
    // this.value="3";
    this.changeCheck("3");
    clearInterval(this.timer);

    // this.checkBox1.checked=false;
    // this.checkBox2.checked=false;
    // this.checkBox4.checked=false;
  }

  toggle4(){
    // this.value="4";
    this.changeCheck("4");
    clearInterval(this.timer);

    // this.checkBox1.checked=false;
    // this.checkBox2.checked=false;
    // this.checkBox3.checked=false;
  }

  changeCheck(tmp){
    this.value = tmp;
    tmp -= 1;
    var checks = document.getElementsByClassName('checkBoxesWH') as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checks.length; i++) {

      if(i != parseInt(tmp)){
        checks[i].checked = false;

      }else{
        checks[i].checked = true;
      }

    }
  }

}
