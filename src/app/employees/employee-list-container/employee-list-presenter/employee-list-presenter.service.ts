// import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class EmployeeListPresenterService {

  public employeeId: Subject<any> = new Subject();
  public employeeId$: Observable<any>;
  
  constructor() { 
    this.employeeId$ = this.employeeId.asObservable();
  }

  public deleteEmployee(id: number) {
    console.log('Employee Id', id);
    this.employeeId.next(id);
  }
}
