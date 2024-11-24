import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var temp : string = "";  
    var Cnt : number = 0;
    for(Cnt = (value as string).length -1; Cnt >= 0; Cnt--)
    {
      temp = temp + (value as string)[Cnt];
    }
    return temp;
  }

}
