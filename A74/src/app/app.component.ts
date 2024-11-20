import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  content = "Marvellous Infosystems";
  public upper()
  {
    this.content = this.content.toUpperCase();
  }
  public lower()
  {
    this.content = this.content.toLowerCase();
  }
}
