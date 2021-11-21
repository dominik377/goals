import { Component, OnInit } from '@angular/core';

import {GoalItem} from "../../_Model/goalItem";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {

  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];


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