import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMul',
  standalone: true
})
export class MyMulPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var Num1 : number = value as number;
    var Num2 : number = args[0] as number;  
    return Num1 * Num2;
  }

}
