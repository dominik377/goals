import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  selectedItem: GoalItem | null = null;
  fullGoalList: GoalItem [] = []
  fundedList: GoalItem [] = [];
  semifundedList: GoalItem [] = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.getGoalList.subscribe( (next: GoalItem []) => {
      this.fullGoalList = next;
      this.fundedList = next.filter ( (x) => x.categoryA === 'funded')
      this.semifundedList = next.filter ( (x) => x.categoryA = 'semi-funded')
      console.log(this.fullGoalList)
    })

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  createItem(): void {
    this.globalService.createNewGoal()
  }

}
