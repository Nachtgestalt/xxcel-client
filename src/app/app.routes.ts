import {Routes} from '@angular/router';
import {LoginComponent} from './auth/pages/login/login.component';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin-panel', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'}
];
