import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {ADMIN_PANEL_PAGES_ROUTES} from './pages/admin-panel-pages.routes';

const adminPanelRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: ADMIN_PANEL_PAGES_ROUTES
  }
];

export const ADMIN_PANEL_ROUTES = RouterModule.forChild(adminPanelRoutes);
