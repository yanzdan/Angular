import { Component } from '@angular/core';

@Component({
  selector: 'app-tom',
  templateUrl: './tom.component.html',
  styleUrls: ['./tom.component.css']
})

export class TomComponent {
  name = 'Tom';
  age = 25;
  InpDisabled = true;

  ChangeName(newName: string): void {
    this.name = newName;
    this.InpDisabled = false;
  }
  constructor() {
    setTimeout(this.ChangeName('Fill'), 6000);
  }
}
