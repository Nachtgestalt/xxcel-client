import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ADMIN_PANEL_ROUTES} from './admin-panel.routes';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {AdminPanelComponent} from './admin-panel.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [DashboardComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    ADMIN_PANEL_ROUTES,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class AdminPanelModule { }
