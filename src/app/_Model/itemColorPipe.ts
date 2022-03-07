import { Pipe, PipeTransform } from '@angular/core';
import {GoalItem} from "./goalItem";

@Pipe({ name: 'itemColorPipe' })
export class ItemColorPipe {
  transform(status: string | null, item: GoalItem ): string {

    console.log(item.id)
    // @ts-ignore

    // @ts-ignore
    switch (status) {
      case 'safe' :
        return 'button--green'
        break
      case 'lightDanger' :
        return 'button--yellow'
        break
      case 'significantDanger' :
        return 'button--orange'
        break
      case  'occurenceOfDamage' :
        return 'button--red'
        break
      }


    return 'button--blue'

  }
}
