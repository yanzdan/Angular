import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child-comp',
//  template: `<input [ngModel]="ChildName" ` + `(ngModelChange)="onChildNameChange($event)"` + `/> `
  template: `<input [ngModel]="ChildName"  (ngModelChange)="onChildNameChange1($event)"/> `
})
export class ChildComponent{

  @Input() ChildName:string;
  @Output() ChildNameChangeEvent = new EventEmitter<string>();
  onChildNameChange1(newChildName:string) {
    //console.log("onChildNameChange:" + newChildName);
    this.ChildNameChangeEvent.emit(newChildName);
  }
}
