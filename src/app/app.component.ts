import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practichna27';
  inputNumber:number;
  isChecked:boolean=true;
  constructor() {
    this.inputNumber = 1;
  }
  onkeyUp(event:any){
    this.inputNumber=event.target.value;
  }
  countries: string[] = ['Україна', 'Польща', 'Угорщина'];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry.trim() !== '') {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  courses = [
    { name: 'html', completed: true },
    { name: 'css', completed: true },
    { name: 'php', completed: false },
    { name: 'js', completed: true },
    { name: 'angular', completed: false },
  ];
  
  
}
