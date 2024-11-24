import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public textContent: string = "";

  @Output() MyEvent = new EventEmitter();
  public sendtoparent() 
  {
    this.MyEvent.emit(this.textContent);
  }
}
