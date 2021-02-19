import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  public onAddEmployee(employeeForm: FormGroup) {
    this.employeeService.addEmployee(employeeForm);
    this.router.navigate(['../employees']);
  }
}
