import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public value : number = 11;
  public str : string = "Marvellous";
  result : boolean = true;
  strcnt : number = 0;

  public constructor(private nobj: NumberService, private sobj: StringService)
  {
    this.result = nobj.ChkPrime(this.value);
    this.strcnt = sobj.CountCapital(this.str);
  }

  isPrime() : string
  {
    if(this.result == true)
    {
      return "Prime Number";
    }
    else
    {
      return "Not Prime Number";
    }
  }

}
