export class Employee {
  id: number;
  fullname: string;
  email: string;
  mobile: number;
  city: string;
  department: string;

  constructor(id: number, fullname: string, email: string, mobile: number, city: string, department: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
    this.department = department;
  }
}