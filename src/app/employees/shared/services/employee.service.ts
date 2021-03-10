import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`)
  }

  public deleteEmployee(id: number) {
    if (confirm('Are you sure?')) {
      this.http.delete<Employee>(`${this.url}/employees/${id}`)
        .subscribe(
          data => console.log('Delete Request is successful ', data),
          error => console.log('Error', error)
        );
    }
  }

  public addEmployee(employeeForm: FormGroup) {
    this.http.post(`${this.url}/employees`, employeeForm).subscribe(
      data => console.log('POST Request is successful ', data),
      error => console.log('Error', error)
    );
  }

  public editEmployee(employeeForm: FormGroup, id: string|null) {
    this.http.put(`${this.url}/employees/${id}`,employeeForm).subscribe(
      res => {
        res
        console.log(res);
      } 
    );
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get(`${this.url}/employees/${id}`) as Observable<Employee>;
  }
}
