import { Routes } from '@angular/router';

import { MenuComponent } from '../component/menu/menu.component';
import { EmployeeComponent } from '../component/employee/employee.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
];
