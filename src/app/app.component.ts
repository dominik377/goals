import { Component } from '@angular/core';
import {GoalItem} from "./_Model/goalItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goals';
  selectedItem: GoalItem | null = null;

  createItem(): void {
    const newItem = new GoalItem();
    this.selectedItem = newItem;
  }
}
