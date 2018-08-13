import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

  fontcolor = 'green';
  addCarStatus = '' ;

  inputText    = '';

  private addCount = 0;

  onInputText(evt: Event) {
    console.log(evt.target);
    this.inputText = (<HTMLInputElement>evt.target).value;
  }

  addCar () {
    /*this.addCount++;*/
    this.addCarStatus = `Машина добавлена ${++this.addCount} раз`;
  }
  /*
  canAddCar = false;
  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
      this.fontcolor = "red";
      }, 6000);

  }
  */


}
