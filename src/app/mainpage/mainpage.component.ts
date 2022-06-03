import {Component, HostListener, OnInit} from '@angular/core';
import {SnackbarService} from "../_Utility/snackbar.service";

import * as _lodash from 'lodash';

import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";
import {HighlightList} from "../_Model/highlightList";


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == 'Alt'){
      this.hideOverlaySection = true
    }
    if(event.key == 'Control'){
      this.hideOverlaySection = false
    }

    console.log(event.key)
  }
  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];
  leftView: 'overview' | 'action' | 'projects' = 'overview';
  rightView: 'details' | 'daily' | 'tabview' | 'filter' | 'search' = 'details';
  showPrivate: boolean []
  hideOverlaySection = true;
  displayRightSection = true;
  filterList: HighlightList

  testIcon = 'view_column'

  constructor(private globalService: GlobalService, private snackbarService: SnackbarService) {
    this.showPrivate = this.globalService.showPrivate
    this.filterList = this.globalService.highlightList
  }

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
    } else {
      alert('No Item selected for deletion')
    }
  }

  selectLeftView(selected: 'overview' | 'action' | 'projects') {
    // if 'projects' is seleleted, the selectedItem must be a project
    if(selected === 'projects' && ( this.selectedItem === null || ! ['smallproject', 'largeproject'].includes (this.selectedItem.actionGoalField)) ) {
      alert(' no item selected or item is no project. Please select a Project before moving to project view')
      return
    }
    this.leftView = selected
  }


  selectRightView(selected: 'details' | 'daily' | 'tabview' | 'filter' | 'search') {
    this.rightView = selected
  }

  switchOverlayDisplay() : void {
    if (this.hideOverlaySection === true ) {
      this.hideOverlaySection = false
    } else {
      this.hideOverlaySection = true
    }
  }

  switchDisplayRightSection(displayRightSection: boolean): void {
    this.displayRightSection = displayRightSection
  }




  testHandler(e: any): void {
    alert(e)
  }

}
