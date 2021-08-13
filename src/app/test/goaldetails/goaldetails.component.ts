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
    this.exampleGoal.categoryA = 'semi-funded';
    this.exampleGoal.categoryB = 'one-time-long';
    this.exampleGoal.juicyness = 5;
    this.exampleGoal.fundingLevelList[0].neededNormal = 300;
    this.exampleGoal.fundingLevelList[0].neededOverkill = 1000
    this.exampleGoal.fundingLevelList[0].assigned  =  400;
    this.exampleGoal.fundingLevelList[1].neededNormal = 120;
    this.exampleGoal.fundingLevelList[1].neededOverkill = 300;
    this.exampleGoal.fundingLevelList[1].assigned = 50;
    this.exampleGoal.fundingLevelList[2].neededNormal = 100;
    this.exampleGoal.fundingLevelList[2].neededOverkill = 400;
    this.exampleGoal.fundingLevelList[2].assigned = 0;
    this.exampleGoal.fundingLevelList[3].neededNormal = 30;
    this.exampleGoal.fundingLevelList[3].neededOverkill = 400;
    this.exampleGoal.fundingLevelList[3].assigned = 0;

    this.globalService.addGoal(this.exampleGoal)

  }

  ngOnInit(): void {


  }

}
