import { Component } from "@angular/core";
import { Model, TodoItem} from './model';



@Component({
  selector: "todo-app",
  templateUrl: './app.component.html'
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }


  getTodoItems() {
    return this.model.items.filter( itm => !itm.done );
  }

  addItem (aNewItem:string) {
    if (aNewItem != "") {
      this.model.items.push(new TodoItem(aNewItem, false));
    }
  }

  resetAll () {
    this.model.items.forEach(function (item, i, arr) {
      item.done = false;

    });
  }
}
