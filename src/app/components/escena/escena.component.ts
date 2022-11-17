import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() frases:string[];

  currentSentence: boolean;

  constructor() {
    
      
  }

  ngOnInit():void {

  }

  prev(){
    console.log("prev");
  }

  next(){
    console.log("next");
  }
}
