import { Pipe, PipeTransform } from '@angular/core';
import {actionGoalFieldTertiaryLookup} from "./actionGoalFieldTertiaryLookup";
import {actionGoalFieldList} from "./actionGoalFieldList";

@Pipe({
  name: 'actionGoalFieldToTertiary'
})
export class ActionGoalFieldToTertiaryPipe implements PipeTransform {

  transform(x: string): string [] {
    console.log(x)
    // @ts-ignore
    if (actionGoalFieldList.includes(x) ) {return actionGoalFieldTertiaryLookup [x]}
    else {
      return ['an Error occured in ActionGoalFieldToSecondaryPipe']
    }
  }

}
