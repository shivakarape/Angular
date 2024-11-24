import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var Num: number = value as number;
    var str: string = "";
    var Cnt: number = 0;
    switch (args[0]) {
      case "Prime":
        {
          for (Cnt = 2; Cnt < Num / 2; Cnt++) {
            if (Num % Cnt == 0) {
              str = "It is Not Prime number";
              break;
            }
            else {
              str = "It is Prime number";
            }
          }
          break;
        }
      case "Perfect":
        {
          var sum: number = 0;
          for (Cnt = 1; Cnt < Num; Cnt++) {
            if (Num % Cnt == 0) {
              sum = sum + Cnt;
            }
          }
          if (sum == Cnt) {
            str = "It is Perfect number";
          }
          else {
            str = "It is Not Perfect number";
          }

          break;
        }
      case "Even":
        {
          if ((Num % 2) == 0) {
            str = "It is Even number";
          }
          else {
            str = "It is Not Even number";
          }
          break
        }

      case "Odd":
        {
          if (Num % 2 == 0) {
            str = "It is Not Odd number";
          }
          else {
            str = "It is Odd number";
          }
          break;
        }

    }

    return str;
  }

}
