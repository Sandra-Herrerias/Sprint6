import { Component} from '@angular/core';
import frases from '../../../assets/frases.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
frasesHome= frases.historiques;

  show: boolean;

}
