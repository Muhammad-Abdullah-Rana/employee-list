import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
