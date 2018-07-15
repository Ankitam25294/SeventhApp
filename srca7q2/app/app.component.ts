import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries=["singapore","Hungary","Ukraine","Japan","Canada"];
  minDate = new Date();
  maxDate = new Date(2020, 12, 0);

  
}
