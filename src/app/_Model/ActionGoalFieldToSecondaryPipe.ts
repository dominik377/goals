import { Pipe, PipeTransform } from '@angular/core';
import {actionGoalFieldSecondaryLookup} from "./actionGoalFieldSecondaryLookup";
import {actionGoalFieldSecondary} from "./actionGoalFieldSecondary";
import {actionGoalFieldList} from "./actionGoalFieldList";

@Pipe({ name: 'actionGoalFieldToSecondaryPipe' })
export class ActionGoalFieldToSecondaryPipe {
  transform(x: string): string [] {
    // @ts-ignore
    if (actionGoalFieldList.includes(x) ) {return actionGoalFieldSecondaryLookup [x]}
    else {
      return ['an Error occured in ActionGoalFieldToSecondaryPipe']
    }
  }
}
