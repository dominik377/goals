import { Component, OnInit } from '@angular/core';
import {SnackbarService} from "../_Utility/snackbar.service";

import * as _lodash from 'lodash';

import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];

  constructor(private globalService: GlobalService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;


    this.globalService.backendTest().subscribe(next => {
      console.log('%c Backend Version:  ' + next.version, 'color: green')
    })

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  createItem(): void {
    this.globalService.createNewGoal()
    this.globalService.focusOnGoalDetails.next(true)
  }

  detailOkHandler(event: GoalItem) {
    console.log(event.displayName)
    _lodash.remove(this.globalService.goalList, event)
        this.globalService.goalList.push (event)
  }

  selectedHandler(event: GoalItem) {
    this.globalService.selectedGoal = event
    this.globalService.publishGoals()
  }

  saveHandler(): void {
    this.globalService.saveAllData();
  }

  loadHandler(): void  {
    this.globalService.loadAllData()
  }

  logHandler(): void {
  }

  deleteHandler(): void {
    if (this.selectedItem !== null) {
      _lodash.remove(this.globalService.goalList, this.selectedItem)

    }
  }

}
