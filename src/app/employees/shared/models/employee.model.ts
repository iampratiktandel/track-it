export class Employee {
  id: number;
  fullname: string;
  gender: string;
  email: string;
  mobile: number;
  city: string;
  department: string;
  hireDate: string;

  constructor(id: number, fullname: string, gender: string, email: string, mobile: number, city: string, department: string, hireDate: string) {
    this.id = id;
    this.fullname = fullname;
    this.gender = gender;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
    this.department = department;
    this.hireDate = hireDate;
  }
}