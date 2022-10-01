import { Component } from '@angular/core';
import { words, countries } from '../utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'word-generator';

  words: string = '';
  countries: string = '';
  limit: number = 5;
  randomNumber: number = 0;

  handleLimitChange($event: any) {
    this.limit = $event?.target.value;
  }

  generateWords() {
    this.words = words.slice(0, this.limit).join(" ");
  }

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 15);
    if(this.randomNumber > 0) {
      this.showCountries();
    }
  }

  showCountries() {
    this.countries = countries.slice(0, this.randomNumber).join(", ");
  }
}
