import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  employee$: Observable<Employee> | undefined;
  public canEdit: boolean = false;
  empId: string | null;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = route.snapshot.paramMap.get('id');
    this.empId = id;
    if (id) {
      this.getEmployeeDetail(+id);
      this.canEdit = true;
    }

  }

  ngOnInit(): void {
  }

  public onAddEmployee(employeeForm: FormGroup) {
    if(!this.canEdit) {
      // this.employeeModel = employeeForm;
      this.employeeService.addEmployee(employeeForm)
    } else {
      this.employeeService.editEmployee(employeeForm, this.empId)
    }
    this.router.navigate(['../employees']);
  }

  public getEmployeeDetail(id: number) {
    this.employee$ = this.employeeService.getEmployeeById(id);
  }
}
