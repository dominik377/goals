import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fundingCategoryNamePipe' })
export class FundingCategoryNamePipe {
  transform(x: string | null): string {
    if (x === null ) {return 'linear-gradient(to bottom right, black, black'}
    if (x === 'funded' )  {return 'funded' }
    if (x === 'semi-funded' )  {return 'semi-funded'}
    if (x === 'near' )  {return 'very realistic'}
    if (x === 'seminear' )  {return 'halfway realistic'}
    if (x === 'far' )  {return 'rather unrealistic'}
    if (x === 'veryfar' )  {return 'very unrealistic'}
    else {
      return 'an Error occured in Fundingcategorynamepipe'
    }
  }
}
