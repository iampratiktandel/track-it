import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css'],
  viewProviders: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {

  private _employeeList: Employee[] = [];


  @Input() public set employeeList(employeeData: Employee[]) {
    if(employeeData) {
      this._employeeList = employeeData;
    }
  }

  public get employeeList(): Employee[] {
    return this._employeeList;
  }

  @Output() deleteId: EventEmitter<any> = new EventEmitter();

  constructor(private employeeListPresenterService: EmployeeListPresenterService) { 
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.employeeListPresenterService.employeeId$.subscribe((employeeId) => {
      this.deleteId.emit(employeeId);
    });
  }

  public deleteEmployee(id: number) {
    this.employeeListPresenterService.deleteEmployee(id);
  }
}
