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
  fundedList: GoalItem [] = [];
  semifundedList: GoalItem [] = [];
  nearList: GoalItem [] = [];
  farList: GoalItem [] = [];

  constructor(private globalService: GlobalService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.fundedList = this.globalService.fundedList;
    this.semifundedList = this.globalService.semifundedList;
    this.nearList = this.globalService.nearList;
    this.farList = this.globalService.farList;

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
    _lodash.remove(this.globalService.fundedList, event)
    _lodash.remove(this.globalService.semifundedList, event)
    _lodash.remove(this.globalService.nearList, event)
    _lodash.remove(this.globalService.farList, event)
    switch (event.categoryA){
      case 'funded':
        this.globalService.fundedList.push (event)
        break;
      case 'semi-funded':
        this.globalService.semifundedList.push (event)
        break;
      case 'near':
        this.globalService.nearList.push (event)
        break;
      case 'far':
        this.globalService.farList.push (event)
        break;
    }
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
    console.log(this.fundedList)
  }

  deleteHandler(): void {
    if (this.selectedItem !== null) {
      _lodash.remove(this.globalService.fundedList, this.selectedItem)
      _lodash.remove(this.globalService.semifundedList, this.selectedItem)
      _lodash.remove(this.globalService.nearList, this.selectedItem)
      _lodash.remove(this.globalService.farList, this.selectedItem)
    }
  }

}
