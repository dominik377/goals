import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";
import {actionGoalField} from "../../_Model/actionGoalField";
import {actionGoalFieldListAbridged} from "../../_Model/actionGoalFieldListAbridged";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-overviewnew',
  templateUrl: './overviewnew.component.html',
  styleUrls: ['./overviewnew.component.scss']
})
export class OverviewnewComponent implements OnInit {

  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];
  actionGoalFieldCategories: actionGoalField [] = actionGoalFieldListAbridged
  largeCategories: actionGoalField [] = ['task', 'practise', 'smallproject', 'largeproject', 'field']


  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  selectedHandler(event: GoalItem) {
    this.globalService.selectedGoal = event
    this.globalService.publishGoals()
  }

}
