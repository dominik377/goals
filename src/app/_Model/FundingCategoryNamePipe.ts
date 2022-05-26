import { Pipe, PipeTransform } from '@angular/core';

const nameLookup : { [char: string]: string } = {
  'funded': 'funded',
  'semi-funded': 'semi-funded',
  'near': 'very realistic',
  'seminear': 'halfway realistic',
  'far': 'rather unrealistic',
  'veryfar': 'very unrealistic',
  // task
  'assigned' : 'time slot assigned',
  'asap' : 'as soon as possible',
  'convenient': 'do when convenient',
  'later': 'do later',
  'consider': 'consider doing',
  'mind': 'keep in mind',
  'lowInterest' : 'lowInterest',
  'backgroundLow': 'Background-low Attention'
}

@Pipe({ name: 'fundingCategoryNamePipe' })
export class FundingCategoryNamePipe {
  transform(x: string | null): string {

    let returnValue = 'error in fundingCategoryNamePipe '
    if(x === null) {
      return  returnValue
    }

    returnValue = nameLookup [x]
    if ( returnValue === undefined) {
      returnValue = x
    }

    return returnValue
  }
}
