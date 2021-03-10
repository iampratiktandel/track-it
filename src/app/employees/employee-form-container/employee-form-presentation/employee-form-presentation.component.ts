import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.css'],
  viewProviders: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentationComponent implements OnInit {

  public employeeForm: FormGroup;
  public canEdit: boolean = false;

  @Input() set employee(value: Employee | null) {
    if (value) {
      this._employee = value;
      console.log('Setter', value);
      this.setEmployeeDetails(value as Employee);
    }
  }
  get employee(): Employee | null {
    console.log('Getter' + this._employee);
    return this._employee;
  }

  @Output() addEmployee: EventEmitter<any> = new EventEmitter();
  private _employee: Employee | null;

  constructor(private employeeFormPresenterService: EmployeeFormPresenterService) {
    this.employeeForm = this.employeeFormPresenterService.bindForm();
    this._employee = null;
  }

  ngOnInit(): void {
    this.employeeFormPresenterService.employeeData$.subscribe(
      (employeeData) => this.addEmployee.emit(employeeData)
    );
  }

  public employeeDetails() {
    console.log(this.employeeForm.value);
    debugger
    this.employeeFormPresenterService.employeeDetails(this.employeeForm);
  }

  private setEmployeeDetails(employee: Employee): void {
    this.employeeForm.reset(employee);
  }

}
