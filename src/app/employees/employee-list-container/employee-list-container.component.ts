import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css'],
  // viewProviders: [EmployeeService]
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$: Observable<any>

  constructor(private employeeService: EmployeeService) {
    //call getEmployees() in Employee Service to get Employees List from json-server
    this.employeeList$ = this.employeeService.getEmployees();
  }

  ngOnInit(): void {
  }

  public onDeleteId(id: number) {
    this.employeeService.deleteEmployee(id)
  }

}
