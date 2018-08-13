import { Component } from '@angular/core';

@Component({
  selector: 'parent-comp',
  template: `<child-comp><h2>Добро пожаловать {{name}}!</h2></child-comp>
                <p>Привет {{name}}</p>`,
  styles: [`h2, p {color:green;}`]
})
export class ParentComponent {
  name = 'Tom';
}
