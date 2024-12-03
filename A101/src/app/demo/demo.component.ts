import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Num1: number = 40;
  public Num2: number = 20;
  public Sum: Number = 0;
  public Diff: Number = 0;
  public constructor(private sobj: ArithmeticService) 
  {
    this.Sum = sobj.Add(this.Num1, this.Num2);
    this.Diff = sobj.Sub(this.Num1, this.Num2);
  }
}
