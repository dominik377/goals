import { Component, OnInit } from '@angular/core';

import {GoalItem} from "../../_Model/goalItem";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-test-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class TestGoaldetailsComponent implements OnInit {
  exampleGoal: GoalItem | null = null;
  selectedGoal: GoalItem | null = null;

  constructor(private globalService: GlobalService) {
    this.globalService.getSelectedGoal.subscribe( (next) => {
      this.selectedGoal = next;
    })

    this.exampleGoal = new GoalItem();
    this.exampleGoal.displayName = 'Example Goal'
    this.exampleGoal.categoryA = 'funded';
    this.exampleGoal.categoryB = 'one-time-long';
    this.exampleGoal.juicyness = 5;

    this.globalService.addGoal(this.exampleGoal)

  }

  ngOnInit(): void {


  }

}
