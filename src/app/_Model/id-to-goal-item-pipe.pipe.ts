import { Pipe, PipeTransform } from '@angular/core';
import {GoalItem} from "./goalItem";
import {GlobalService} from "../global.service";

@Pipe({
  name: 'idToGoalItemPipe'
})
export class IdToGoalItemPipe implements PipeTransform {

  constructor(private globalService: GlobalService) {}

  transform(id: number): GoalItem | null {
    const goalItemList = this.globalService.goalList.filter( item => item.id === id)
    if(goalItemList.length === 1) {
      return goalItemList [0]
    }
    else {return null}

  }

}
