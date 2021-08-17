import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {GoalItem} from "./_Model/goalItem";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  goalList: GoalItem [] = []
  selectedGoal: GoalItem | null = null
  getGoalList: BehaviorSubject<GoalItem []>
  getSelectedGoal: BehaviorSubject<GoalItem | null>;
  selectedGoalUpdated: BehaviorSubject<boolean | null>

  constructor() {
    this.getGoalList = new BehaviorSubject<GoalItem []>([])
    this.getSelectedGoal = new BehaviorSubject<GoalItem | null>(null)
    this.selectedGoalUpdated = new BehaviorSubject<boolean | null>(null)
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
    console.log(g)
    this.addGoal(g)
    this.publishGoals()
  }

  sendSelectedGoalUpdatedSignal(): void {
    this.selectedGoalUpdated.next(true)
  }
}
