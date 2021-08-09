import {Component, OnInit} from '@angular/core';
import {GoalItem} from "./_Model/goalItem";
import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goals';
}
