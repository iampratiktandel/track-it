import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
}
