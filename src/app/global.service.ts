import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {GoalItem} from "./_Model/goalItem";
import {DailyItem} from "./_Model/dailyItem";
import {environment} from "../environments/environment";
import {SnackbarService} from "./_Utility/snackbar.service";
import {HighlightList} from "./_Model/highlightList";
import {ParentChildRelationship} from "./_Model/parentChildRelationship";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  goalList: GoalItem [] = []
  selectedGoal: GoalItem | null = null
  globalDailyItem: DailyItem
  showPrivate = [true]
  itemIdCounter = 0;
  relationshipCounter = 0; // every parent-child relationship needs an individual Id
  highlightList = new HighlightList()
  useFilter = [false]
  highlightMoonshots = [false]
  highlightLifechanging = [false]
  displayOverlaySelectedRelationshipType: boolean [] = [false]




  getGoalList: BehaviorSubject<GoalItem []>
  getSelectedGoal: BehaviorSubject<GoalItem | null>;
  selectedGoalUpdated: BehaviorSubject<boolean | null>

  focusOnGoalDetails: BehaviorSubject<boolean | null>

  relationshipTypeSelectionSubject: BehaviorSubject<string | null>

  constructor(private http:HttpClient, private snackbarService: SnackbarService) {
    this.getGoalList = new BehaviorSubject<GoalItem []>([])
    this.getSelectedGoal = new BehaviorSubject<GoalItem | null>(null)
    this.selectedGoalUpdated = new BehaviorSubject<boolean | null>(null)
    this.focusOnGoalDetails = new BehaviorSubject<boolean | null>(null)
    this.relationshipTypeSelectionSubject = new BehaviorSubject<string | null>(null)

    this.globalDailyItem = new DailyItem()
    console.log(this.globalDailyItem)
  }

  init(): void {
    this.globalDailyItem = new DailyItem()
    console.log(this.globalDailyItem)
  }



  publishGoals(): void {
    this.getGoalList.next(this.goalList)
    this.getSelectedGoal.next(this.selectedGoal)
  }

  addGoal(newGoal: GoalItem): void {
    this.goalList.push (newGoal)
    this.selectedGoal = newGoal

    this.publishGoals()
  }

  createNewGoal() {
    // create new goal and assign a unique Id
    const g = new GoalItem();
    this.itemIdCounter += 1
    g.id = this.itemIdCounter


    this.selectedGoal = g
    this.goalList.push(g)
    this.publishGoals()
    this.focusOnGoalDetails.next(true)
  }

  createNewGoal2(setAsSelected: boolean = false): GoalItem {  // like the normal createNewGoal, but returns the goal
    // create new goal and assign a unique Id
    const g = new GoalItem();
    this.itemIdCounter += 1
    g.id = this.itemIdCounter


    this.goalList.push(g)
    if (setAsSelected === true) {this.selectedGoal = g}
    this.publishGoals()

    this.focusOnGoalDetails.next(true)

    return g
  }





  saveAllData(): void {

    if (this.goalList.length < 10) { // prevent accisentially overwriting my data with a new, empty dataset
      alert('You are trying to overwrite your data with an empty list; please create more than 10 items before saving')
      return
    } else {

      const body = {
        collection: environment.dbCollection,
        query: {id: 1},
        newvalues: {
          id: 1,
          goalList: this.goalList,
          dailyItem: this.globalDailyItem,
          itemIdCounter: this.itemIdCounter,
          relationshipCounter: this.relationshipCounter
        }
      }

      console.log(body)

      this.http.post<any>(environment.backend + '/update', body).subscribe(next => {
        this.snackbarService.openSnackBar('Data saved');
      })
    }
  }

  loadAllData(): void {
    const body = {
      collection: environment.dbCollection,
      query: {id: 1},
    }

    this.http.post<any>(environment.backend + '/query', body ).subscribe(next => {
      const data =  next.result[0]

      //      ___ I ___     goal List
      this.goalList.length = 0
      this.goalList.push(...data.goalList)

      //      ___ II ___    Daily Item
      if (data.dailyItem !== undefined) {
        this.globalDailyItem = data.dailyItem
      } else {
        this.globalDailyItem = new DailyItem()
      }

      //      ___ III ___    Counters
      this.itemIdCounter = data.itemIdCounter
      if (data.relationshipCounter) {this.relationshipCounter = data.relationshipCounter}




      //      ___ V ___ Snackbar Service
      this.snackbarService.openSnackBar('data Loaded');

    })
  }

  initDb(): void {
    const body = {
      collection: environment.dbCollection,
      data: {
        id: 1,
        goalList: this.goalList
      }
    }
    this.http.post<any>(environment.backend + '/insert', body  ).subscribe(next => {
      alert(next)
    })
  }


  backendTest(): Observable<any> {
    return this.http.post<any>(environment.backend + '/backendTest', {}  )
  }

  activateRelationshipTypeDialog(rightclickedItem: GoalItem | null): void {
    if(rightclickedItem === null || this.selectedGoal === null) {
      return
    }
    this.displayOverlaySelectedRelationshipType [0] =  true

    this.relationshipTypeSelectionSubject.subscribe(next => {
      if(rightclickedItem === null || this.selectedGoal === null) {
        return
      }
      if (next !== null) {
        this.createRelationship(this.selectedGoal, rightclickedItem, next)
        /*
        const childRelationship = new ParentChildRelationship(this.relationshipCounter, 'child', rightclickedItem.id)
        childRelationship.relationshipType = next
        this.selectedGoal.complexChildList.push(childRelationship)
        console.log(this.selectedGoal.complexChildList)
         */
      }
    })
  }

  createRelationship(parent: GoalItem, child: GoalItem, relationshipType: string): void {
    if  (parent  === null || child === null) { return }
    const childRelationship = new ParentChildRelationship(this.relationshipCounter, 'child', child.id)
    childRelationship.relationshipType = relationshipType
    parent.complexChildList.push(childRelationship)

  }





}
