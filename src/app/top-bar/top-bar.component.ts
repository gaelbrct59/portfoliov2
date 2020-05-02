import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: [
    trigger('animBackground', [
        state('active', style({ top:"0" })),
        transition('* => active', animate("1500ms"))
    ])
  ]
})

export class TopBarComponent implements OnInit {
  // @Input set value(valeur: string){
  //   this.value = valeur
  // }
  value: string = "";
  ngOnInit(): void {
    this.value="active";
  }


}
