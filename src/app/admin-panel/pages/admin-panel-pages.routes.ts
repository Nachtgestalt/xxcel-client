import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';

export const ADMIN_PANEL_PAGES_ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Inicio'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Productos'}}
];
