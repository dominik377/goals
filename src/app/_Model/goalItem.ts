import {actionGoalField} from "./actionGoalField";
import {actionGoalFieldSecondary} from "./actionGoalFieldSecondary";

export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'funded' | 'semi-funded' | 'near' |'seminear' | 'far' | 'veryfar' | null  = null;
  categoryB: 'perennial' | 'one-time-long' | 'one-time-short' | null = null;
  juicyness:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null = null;
  primaryResource: 'time' | 'money' | 'time AND money' = 'time'
  actionCategory : 'purchase' | 'practise' | 'project' | 'meta-action' | 'other' | null = null   //  Deprecated : not yet deleted for reasons of save backwards compatibility
  actionGoalField : string = 'goal'
  actionGoalFieldSecondary : string = 'undefined'
  resoucesNeeded: number = 0
  resourcesAssigned: number = 0


  constructor() {



  }
}
