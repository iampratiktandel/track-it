import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeesComponent,
    children: [
      {
        path: '',
        component: EmployeeListContainerComponent
      },
      {
        path: 'add',
        component: EmployeeFormContainerComponent
      },
      {
        path: 'edit/:id',
        component: EmployeeFormContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
