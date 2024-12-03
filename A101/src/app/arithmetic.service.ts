import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Add(Num1 : number, Num2 : number ) : number
  {
      var Sum : number = Num1 + Num2;
      return Sum;
  }

  Sub(Num1 : number, Num2 : number ) : number
  {
    var Diff : number = Num1 - Num2;
    return Diff;
  }
}
