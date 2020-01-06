import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';

const adminPanelRoutes: Routes = [
  {path: '', component: AdminPanelComponent}
];

export const ADMIN_PANEL_ROUTES = RouterModule.forChild(adminPanelRoutes);
