import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { StartComponent }   from './start.component';

//import { ChildComponent }   from './2_6/child.component';
//import { ParentComponent }   from './2_6/parent.component';

//import { ChildComponent }   from './2_7.1/child.component';
//import { AppComponent }   from './2_7.1/app.component';

//import { ChildComponent }   from './2_7.2/child.component';
//import { AppComponent }   from './2_7.2/app.component';

//Привязка к событиям дочернего компонента
//https://metanit.com/web/angular2/2.10.php
//import { ChildComponent }   from './2_10.1/child.component';
//import { AppComponent }   from './2_10.1/app.component';

//Двусторонняя Привязка родительского и дочернего компонентов
//https://metanit.com/web/angular2/2.10.php
import { ChildComponent }   from './2_10.2/child.component';
import { AppComponent }   from './2_10.2/app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ StartComponent,  AppComponent, ChildComponent],
  bootstrap:    [ StartComponent ]
})
export class StartModule { }
