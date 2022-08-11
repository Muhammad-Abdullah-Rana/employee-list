import { Injectable } from '@angular/core';
import { IEmployee } from '../model/iemployee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: IEmployee[]=[
    {id:1, name:'Abdullah', designation:'Intern'},
    {id:2, name:'Hassan', designation:'Associate Software Engineer'},
    {id:3, name:'Sohaib', designation:'Intern'},
    {id:4, name:'Usman', designation:'Intern'}
  ];
  getEmployees(){
    return this.employees;
  }
}
