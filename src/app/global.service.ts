import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {GoalItem} from "./_Model/goalItem";
import {environment} from "../environments/environment";
import {SnackbarService} from "./_Utility/snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  goalList: GoalItem [] = []
  fundedList: GoalItem [] = []
  semifundedList: GoalItem [] = []
  nearList: GoalItem [] = []
  farList: GoalItem [] = []
  selectedGoal: GoalItem | null = null

  getGoalList: BehaviorSubject<GoalItem []>
  getSelectedGoal: BehaviorSubject<GoalItem | null>;
  selectedGoalUpdated: BehaviorSubject<boolean | null>

  focusOnGoalDetails: BehaviorSubject<boolean | null>

  constructor(private http:HttpClient, private snackbarService: SnackbarService) {
    this.getGoalList = new BehaviorSubject<GoalItem []>([])
    this.getSelectedGoal = new BehaviorSubject<GoalItem | null>(null)
    this.selectedGoalUpdated = new BehaviorSubject<boolean | null>(null)
    this.focusOnGoalDetails = new BehaviorSubject<boolean | null>(null)
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
    const g = new GoalItem();
    this.selectedGoal = g
    this.publishGoals()
  }

  sendSelectedGoalUpdatedSignal(): void {
    this.selectedGoalUpdated.next(true)
  }



  saveAllData(): void {
    const body = {
      collection: environment.dbCollection,
      query: {id: 1},
      newvalues: {
        id: 1,
        goalList: this.goalList,
        fundedList: this.fundedList,
        semifundedList: this.semifundedList,
        nearList: this.nearList,
        farList: this.farList
      }
    }

    this.http.post<any>(environment.backend + '/update', body ).subscribe(next => {
      this.snackbarService.openSnackBar('Data saved');
    })
  }

  loadAllData(): void {
    const body = {
      collection: environment.dbCollection,
      query: {id: 1},
    }

    this.http.post<any>(environment.backend + '/query', body ).subscribe(next => {

      const data =  next.result[0]
      this.fundedList.length = 0
      this.fundedList.push(...data.fundedList)

      this.semifundedList.length = 0
      this.semifundedList.push(...data.semifundedList)

      this.nearList.length = 0
      this.nearList.push(...data.nearList)

      this.farList.length = 0
      this.farList.push(...data.farList)

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




}
