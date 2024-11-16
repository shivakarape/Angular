import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 [class]="'Success'">
      Marvellous Infosystems
    </h1>
  `,
  styles: `
  .Success
  {
  color: blue;
  }
  `
})
export class AppComponent {
  title = 'A6_2';
}
