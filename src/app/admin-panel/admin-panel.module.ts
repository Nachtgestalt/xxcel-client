import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel.component';
import {ADMIN_PANEL_ROUTES} from './admin-panel.routes';



@NgModule({
  declarations: [DashboardComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    ADMIN_PANEL_ROUTES
  ]
})
export class AdminPanelModule { }
