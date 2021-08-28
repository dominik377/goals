import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'juicynessColorPipe' })
export class JuicynessColorPipe {
  transform(x: number | null): string {
    if (x === null ) {return 'linear-gradient(to bottom right, black, black'}
    if (x === 0 )  {return 'linear-gradient(to bottom right, darkgrey, black' }
    if (x === 1 )  {return 'linear-gradient(to bottom right, grey, darkgrey'}
    if (x === 2 )  {return 'linear-gradient(to bottom right, lightgrey, grey'}
    if (x === 3 )  {return 'linear-gradient(to bottom right, lightgreen, green'}
    if (x === 4 )  {return 'linear-gradient(to bottom right, lightblue, blue'}
    if (x === 5 )  {return 'linear-gradient(to bottom right, #daf, indigo'}
    if (x > 5 )  {return 'linear-gradient(to bottom right, white, white'}
    else {
      return 'black'
    }
  }
}
