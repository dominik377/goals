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
    this.exampleGoal.fundingLevels.timePerennial.neededNormal = 120;
    this.exampleGoal.fundingLevels.timePerennial.neededOverkill = 300;
    this.exampleGoal.fundingLevels.timePerennial.assigned = 50;
    this.exampleGoal.fundingLevels.moneyOneTime.neededNormal = 100;
    this.exampleGoal.fundingLevels.moneyOneTime.neededOverkill = 400;
    this.exampleGoal.fundingLevels.moneyOneTime.assigned = 0;
    this.exampleGoal.fundingLevels.moneyPereniall.neededNormal = 30;
    this.exampleGoal.fundingLevels.moneyPereniall.neededOverkill = 400;
    this.exampleGoal.fundingLevels.moneyPereniall.assigned = 0;
  }

  ngOnInit(): void {


  }

}
