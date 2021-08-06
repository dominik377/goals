import { Injectable } from '@angular/core';
import {GoalItem} from "./_Model/goalItem";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  goalList: GoalItem [] = [];

  constructor() {
    this.initGoalList();

  }

  initGoalList (): void {
    for (const i of [0, 1, 2]) {
      const g = new GoalItem();
      this.goalList.push (g);
    }
  }
}
