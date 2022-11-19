import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() frases: any[];

  currentSentence!: string;
  currentPhoto!: string;
  @Output() modifiedSentence = new EventEmitter<string>();
  @Output() modifiedPhoto = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.currentSentence = this.frases[0].txt;
    this.currentPhoto = this.frases[0].img;
  }

  prev() {

    let index: number;

    index = this.frases.findIndex(x => x.txt === this.currentSentence);

    if (index - 1 < 0) {
      return;//takes you out of the method and the text below is not executed
    }

    this.currentSentence = this.frases[index - 1].txt;
    this.currentPhoto = this.frases[index - 1].img;


    this.modifiedSentence.emit(this.currentSentence);
    this.modifiedPhoto.emit(this.currentPhoto);
  }

  next() {
    let index: number;

    index = this.frases.findIndex(x => x.txt === this.currentSentence);

    if (index + 1 >= this.frases.length) {
      return;
    }

    this.currentSentence = this.frases[index + 1].txt;
    this.currentPhoto = this.frases[index + 1].img;

    this.modifiedSentence.emit(this.currentSentence);
    this.modifiedPhoto.emit(this.currentPhoto);
  }
}
