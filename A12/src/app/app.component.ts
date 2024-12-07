import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mainForm = new FormGroup(
    {
      FirstName : new FormControl(''),
      Lastname : new FormControl(''),
      Email : new FormControl(''),
      Phone : new FormControl(''),
      Address : new FormControl('')
    }
  );
}
