import { Component } from '@angular/core';
import { IEmployee } from './model/iemployee.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmployee: IEmployee;
  title = 'employee-list';
}
