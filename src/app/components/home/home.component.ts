import { Component} from '@angular/core';
import frases from '../../../assets/frases.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
frasesHome = frases.historiques;

showPhoto: string;
  show: boolean;


  constructor() { }

  ngOnInit(): void {
    this.showPhoto = this.frasesHome[0].img;
  }



    /**
 * Executes info that gets from child component 
 * @param $event 
 */
     getPhoto($event: string) {
      this.showPhoto = $event;
    }
}
