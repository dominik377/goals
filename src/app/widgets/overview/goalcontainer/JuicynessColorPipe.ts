import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'juicynessColorPipe' })
export class JuicynessColorPipe {
  transform(x: number | null): string {
    if (x === null ) {return 'linear-gradient(to bottom right, black, black'}
    if (x === 0 )  {return 'linear-gradient(to bottom right, darkgrey, black' }
    if (x === 1 )  {return 'linear-gradient(to bottom right, lightgreen, green'}
    if (x === 2 )  {return 'linear-gradient(to bottom right, #f0e0ff, #b080ff'}
    else {
      return 'black'
    }
  }
}
