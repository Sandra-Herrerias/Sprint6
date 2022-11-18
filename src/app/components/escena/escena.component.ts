import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() frases: string[];

  currentSentence!: string;

  constructor() { }

  ngOnInit(): void {
    this.currentSentence = this.frases[0];
  }

  prev(index: number) {
    if (index - 1 < 0) {
      return;//takes you out of the method and the text below is not executed
    }

    this.currentSentence = this.frases[index - 1];
  }

  next(index: number) {
    if (index + 1 >= this.frases.length) {
      return;
    }

    this.currentSentence = this.frases[index + 1];
  }
}
