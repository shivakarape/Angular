import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(Num : number) : boolean 
  {
    var pflag : boolean = true;
    var Cnt : number = 0;
    for(Cnt = 2; Cnt < Num / 2; Cnt++)
    {
      if(Num % Cnt == 0)
      {
        pflag = false;
      }
    }
    return pflag;
  }
}
