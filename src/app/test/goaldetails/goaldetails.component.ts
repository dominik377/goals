import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";

@Component({
  selector: 'app-test-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class TestGoaldetailsComponent implements OnInit {
  exampleGoal: GoalItem | null = null;

  constructor() {
    this.exampleGoal = new GoalItem();
    this.exampleGoal.displayName = 'Example Goal'
    this.exampleGoal.categoryA = 'semi-funded';
    this.exampleGoal.categoryB = 'one-time-long';
    this.exampleGoal.juicyness = 5;
    this.exampleGoal.fundingLevels.timeOneTime.neededNormal = 300;
    this.exampleGoal.fundingLevels.timeOneTime.neededOverkill = 1000
    this.exampleGoal.fundingLevels.timeOneTime.assigned  =  400;
  }

  ngOnInit(): void {


  }

}
