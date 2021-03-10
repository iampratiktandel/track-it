// import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { Employee } from '../../shared/models/employee.model';

// @Injectable({
//   providedIn: 'root'
// })

export class EmployeeFormPresenterService {

  public employeeData: Subject<Employee[]> = new Subject();
  public employeeData$: Observable<Employee[]>;

  constructor() { 
    this.employeeData$ = this.employeeData.asObservable();
  }

  public bindForm(): FormGroup {
    return new FormGroup({
      fullname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      city: new FormControl(),
      department: new FormControl(),
      hireDate: new FormControl()
    })
  }

  public employeeDetails(employeeForm: FormGroup) {
    this.employeeData.next(employeeForm.value);
  }
}
