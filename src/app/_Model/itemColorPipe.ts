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
      case  'great' :
        return 'button--purple'
        break
      case  'good' :
        return 'button--blue'
        break
      case  'ok' :
        return 'button--green'
        break
      case  'suboptimal' :
        return 'button--lightgrey'
        break
      case  'bad' :
        return 'button--grey'
        break
      case  'nothingGoingOn' :
        return 'button--black'
        break
      case  'veryPromising' :
        return 'button--purplegrey'
        break
      case  'promising' :
        return 'button--bluegrey'
        break
      case  'hope' :
        return 'button--greengrey'
        break
      }


    return 'button--white'

  }
}
