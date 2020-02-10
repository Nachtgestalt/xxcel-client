import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ADMIN_PANEL_ROUTES} from './admin-panel.routes';
import { LayoutModule } from '@angular/cdk/layout';
import {AdminPanelComponent} from './admin-panel.component';
import {AngularMaterialModule} from '../angular-material.module';



@NgModule({
  declarations: [DashboardComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    ADMIN_PANEL_ROUTES,
    LayoutModule,
    AngularMaterialModule
  ]
})
export class AdminPanelModule { }
