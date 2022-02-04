import { Pipe, PipeTransform } from '@angular/core';
import {actionGoalFieldToStatusLookup} from "./ActionGoalFieldToStatusLookup";
import {actionGoalFieldList} from "./actionGoalFieldList";

@Pipe({ name: 'actionGoalFieldToStatusPipe' })
export class ActionGoalFieldToStatusPipe {
  transform(x: string): string [] {
    // @ts-ignore
    if (actionGoalFieldList.includes(x) ) {return actionGoalFieldToStatusLookup [x]}
    else {
      return ['an Error occured in ActionGoalFieldToSecondaryPipe']
    }
  }
}
