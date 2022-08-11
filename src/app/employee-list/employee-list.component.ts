import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployee } from '../model/iemployee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  constructor (private _employeeService: EmployeeService){
    
  }
  @Output() selectedEmployee = new EventEmitter<IEmployee>();
}
