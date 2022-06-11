import { Pipe, PipeTransform } from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";

@Pipe({
  name: 'extractChildListByRealtionshipTypePipe'
})
export class ExtractChildListByRealtionshipTypePipePipe implements PipeTransform {

  transform(item: GoalItem, relationshipType: string): number [] {
    const resultList = []
    for (let relationship of item.complexChildList) {
      if (relationship.relationshipType === relationshipType) {
        resultList.push (relationship.targetId)
      }
    }
    return resultList;
  }

}
