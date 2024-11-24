import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: unknown): number
  {
    var Num1 = param as number;
    var Num2 = value
    return (Num1 + Num2);
  }

}
