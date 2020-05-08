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
          marginLeft:"10vw"
      })),
      state('2', style({
          marginLeft:"-163.5vw"
      })),
      state('3', style({
          marginLeft:"-339vw"
      })),
      state('4', style({
          marginLeft:"-513.5vw"
      })),
      transition('* <=> *', animate("400ms")),

  ])],
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  value = "0";
  valueCheckbox = new String("");
  timer;

  constructor() { }

  ngOnInit(): void {
    this.valueCheckbox = "inactive";
    this.value = "1";

    this.check(document.getElementsByClassName("checkBoxesWH")[0]);
    let timer1 = document.getElementsByClassName("timer")[0] as HTMLElement;
    timer1.style.animation = "time 10s linear";


    this.timer = setInterval(() => {
        var timers = document.getElementsByClassName("timer") as HTMLCollectionOf<HTMLElement>;
        let increaseValue: string = String(parseInt(this.value) + 1 + "");
        if (increaseValue == "5") {
          increaseValue = "1";
        }
        this.changeCheck(increaseValue);
        timers[parseInt(increaseValue) - 1].style.animation = "time 10s linear";

    }, 10000);

  }

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
    var timers = document.getElementsByClassName('timer') as HTMLCollectionOf<HTMLInputElement>
    var checks = document.getElementsByClassName('checkBoxesWH') as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < checks.length; i++) {

      if(i != parseInt(tmp)){
        this.uncheck(checks[i]);
        timers[i].style.animation = "none";

      }else{
        this.check(checks[i]);
      }

    }
  }

  check(tmp){
    tmp.style.width = "20vw";
    tmp.style.backgroundColor = "#656563";

  }

  uncheck(tmp){
    tmp.style.width = "calc(5px + 1.5vw)";
    tmp.style.backgroundColor = "#87D6E7";

    // tmp.animation = "none";
  }

}
