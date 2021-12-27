import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fundingCategoryNamePipe' })
export class FundingCategoryNamePipe {
  transform(x: string | null): string {
    if (x === null ) {return 'linear-gradient(to bottom right, black, black'}
    if (x === 'funded' )  {return 'funded' }
    if (x === 'semi-funded' )  {return 'semi-funded'}
    if (x === 'near' )  {return 'sehr realistisch'}
    if (x === 'seminear' )  {return 'halbwegs realistisch'}
    if (x === 'far' )  {return 'eher unrealistisch'}
    if (x === 'veryfar' )  {return 'sehr unrealistisch'}
    else {
      return 'an Error occured in Fundingcategorynamepipe'
    }
  }
}
