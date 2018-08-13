import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <button (click)="EmitChangeEvent(+2)">++</button>
    <button (click)="EmitChangeEvent(+1)">+</button>
    <button (click)="EmitChangeEvent(-1)">--</button>
    <button (click)="EmitChangeEvent(-2)">-</button>
    `
})
export class ChildComponent{

  @Output() onChangeChild = new EventEmitter<number>();
  EmitChangeEvent(increased:any) {
    console.log(this.onChangeChild);
    this.onChangeChild.emit(increased);
  }
}
