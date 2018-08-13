import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Количество кликов: {{clicks}}</h2>
  <child-comp (onChangeChild)="onChangeParentProc($event)"></child-comp>`
})
export class AppComponent {

  clicks:number = 0;
  onChangeParentProc(increased:any){
    console.log(increased);
    this.clicks += increased;
  }
}
