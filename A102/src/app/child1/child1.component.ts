import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component 
{
  public value : number = 89;
  public result : boolean = true;
  public constructor(private pobj : NumberService)
  {
    this.result = pobj.ChkPrime(this.value);
  }

  isPrime() : string
  {
    if(this.result == true)
    {
      return "is Prime Number";
    }
    else
    {
      return "is Not Prime Number";
    }
  }
}
