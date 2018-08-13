import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <p>Раз</p>
      <ng-content></ng-content>
    <p>Два</p>
    <h2>Добро пожаловать {{name}}!</h2>`,
  styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
  name = "Евгений";
}
