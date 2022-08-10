import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployee } from '../model/iemployee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: IEmployee[]=[
    {id:1, name:'Abdullah', designation:'Intern'},
    {id:2, name:'Hassan', designation:'Associate Software Engineer'},
    {id:3, name:'Sohaib', designation:'Intern'},
    {id:4, name:'Usman', designation:'Intern'}
  ];
  @Output() selectedEmployee = new EventEmitter<IEmployee>();
}
