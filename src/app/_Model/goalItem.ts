import {actionGoalField} from "./actionGoalField";
import {actionGoalFieldSecondary} from "./actionGoalFieldSecondary";
import {ParentChildRelationship} from "./parentChildRelationship";

export class GoalItem {
  id: number = -1
  displayName = '';
  details = '';
  categoryA: 'funded' | 'semi-funded' | 'near' |'seminear' | 'far' | 'lowInterest' | 'veryfar' | null  = null;  //  Deprecated : not yet deleted for reasons of save backwards compatibility
  status: string | null = null;
  categoryB: 'perennial' | 'one-time-long' | 'one-time-short' | null = null;
  juicyness:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null = 0;
  primaryResource: 'time' | 'money' | 'time AND money' = 'time'   //  Deprecated : not yet deleted for reasons of save backwards compatibility
  actionCategory : 'purchase' | 'practise' | 'project' | 'meta-action' | 'other' | null = null   //  Deprecated : not yet deleted for reasons of save backwards compatibility
  actionGoalField : string = 'goal'
  actionGoalFieldSecondary : string = 'undefined'
  actionGoalFieldTertiary : string = 'undefined'
  resoucesNeeded: number = 0
  resourcesAssigned: number = 0
  priority: number = 0
  successChance : number | 'undefined' = 'undefined'
  onetimePeriodic : 'o' | 'p' = 'o'
  moneyOt : number |  'undefined' = 'undefined'
  timeOt  : number |  'undefined' = 'undefined'
  moneyPer : number |  'undefined' = 'undefined'
  timePer : number |  'undefined' = 'undefined'
  utilonsOt: number |  'undefined' = 'undefined'
  utilonsPer : number |  'undefined' = 'undefined'
  lifechangingPotential: 'gamechanging' | 'lifechanging' | false = false
  secret: boolean = false
  parentList: number [] = []
  complexChildList: ParentChildRelationship [] = []
  moneyblocked: 'no' | 'soft' | 'hard' | null = 'no'
  easilySolvable: 'no' | 'money' | 'timeAndEnergy' | 'determinedAction' = 'no'
  moonshot: boolean = false
  relieverSatisfier: 'reliever' | 'satisfier' | 'undefined' = 'undefined'
  priorityToday: 'primary' | 'secondary' | 'tertiary' | 'no' = 'no'

  constructor() {


  }
}
