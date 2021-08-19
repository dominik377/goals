import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";
import * as _lodash from 'lodash';

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
  nearList: GoalItem [] = [];
  farList: GoalItem [] = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.fundedList = this.globalService.fundedList;
    this.semifundedList = this.globalService.semifundedList;
    this.nearList = this.globalService.nearList;
    this.farList = this.globalService.farList;

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  createItem(): void {
    this.globalService.createNewGoal()
  }

  testUpdateGoalList(): void {
    this.globalService.testUpdateGoalList()
  }

}
