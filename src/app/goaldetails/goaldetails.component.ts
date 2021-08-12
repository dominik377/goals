import {Component, Input, OnInit} from '@angular/core';
import {GoalItem} from "../_Model/goalItem";

@Component({
  selector: 'app-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class GoaldetailsComponent implements OnInit {
  @Input() item: GoalItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  inputChangeHandler($event: any, variable: any): void {
    variable = $event.target.value;
  }

}
