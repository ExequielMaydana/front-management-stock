import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from "../auth/components/log-in/log-in.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, LogInComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
