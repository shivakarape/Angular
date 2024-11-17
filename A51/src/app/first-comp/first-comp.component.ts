import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {

}
