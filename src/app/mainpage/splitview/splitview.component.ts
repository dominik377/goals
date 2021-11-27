import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";
import {GlobalService} from "../../global.service";
import {actionGoalField} from "../actionGoalField";

@Component({
  selector: 'app-splitview',
  templateUrl: './splitview.component.html',
  styleUrls: ['./splitview.component.scss']
})
export class SplitviewComponent implements OnInit {

  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];
  actionGoalFieldCategories: actionGoalField [] = ['action', 'goal', 'field']


  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;


    this.globalService.backendTest().subscribe(next => {
      console.log('%c Backend Version:  ' + next.version, 'color: green')
    })

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  selectedHandler(event: GoalItem) {
    this.globalService.selectedGoal = event
    this.globalService.publishGoals()
  }

}
