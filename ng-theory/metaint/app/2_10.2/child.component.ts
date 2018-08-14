import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<input [ngModel]="userNameInChild" (ngModelChange)="onNameChange($event)" />`
})
export class ChildComponent{

  @Input() userNameInChild:string;
  @Output() userNameInChildChange = new EventEmitter<string>();
  onNameChange(model: string){

    this.userNameInChild = model;
    this.userNameInChildChange.emit(model);
  }
}
