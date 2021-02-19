import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.css'],
  viewProviders: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentationComponent implements OnInit {

  public employeeForm: FormGroup;

  @Output() addEmployee: EventEmitter<any> = new EventEmitter();
  
  constructor(private employeeFormPresenterService: EmployeeFormPresenterService) { 
    this.employeeForm = this.employeeFormPresenterService.bindForm();
  }

  ngOnInit(): void {
    this.employeeFormPresenterService.employeeData$.subscribe(
      (employeeData) => this.addEmployee.emit(employeeData)
    );
  }

  public employeeDetails() {
    this.employeeFormPresenterService.employeeDetails(this.employeeForm);
  }

}
