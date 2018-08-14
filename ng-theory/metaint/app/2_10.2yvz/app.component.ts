import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<child-comp [(ChildName)]="ParentName"></child-comp>
                <div>Выбранное имя: {{ParentName}}</div>`
})
export class AppComponent {

  ParentName:string = 'Tomas';
  }
}
