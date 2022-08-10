import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../model/iemployee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent {
  @Input() selectedEmployee: IEmployee;
}
