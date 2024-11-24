import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public Data : string = "Hello from Child";
  @Output() public MyEvent = new EventEmitter();
  @Input() public MyData : any ;
  public SendToApp() 
  {
    this.MyEvent.emit(this.Data);
  }
}
