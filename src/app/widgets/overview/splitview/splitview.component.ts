import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";
import {GlobalService} from "../../../global.service";
import {actionGoalField} from "../../../_Model/actionGoalField";
import {actionGoalFieldList} from "../../../_Model/actionGoalFieldList";
import {actionGoalFieldListAbridged} from "../../../_Model/actionGoalFieldListAbridged";

@Component({
  selector: 'app-splitview',
  templateUrl: './splitview.component.html',
  styleUrls: ['./splitview.component.scss']
})
export class SplitviewComponent implements OnInit {

  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];
  actionGoalFieldCategories: actionGoalField [] = actionGoalFieldListAbridged


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
