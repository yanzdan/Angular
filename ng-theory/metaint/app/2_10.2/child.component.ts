import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<input [ngModel]="userNameInChild" `
    + ` (ngModelChange)="onNameChange($event)" `
    + `/>
  <p>ChildName= {{userNameInChild}}</p>`
})
export class ChildComponent{

  @Input() userNameInChild:string;
  // !!! Важно
  // Имя єммитера должно иметь вид <имя_изменяемого_свойства>Change
  @Output() userNameInChildChange = new EventEmitter<string>();
  onNameChange(model: string){

   //this.userNameInChild = "<<" + model +">>";
   this.userNameInChildChange.emit(model.split("").reverse().join(""));
  }
}
