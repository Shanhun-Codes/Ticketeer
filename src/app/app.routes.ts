import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AgentsComponent } from './features/agents/pages/agents/agents.component';
import { SettingsComponent } from './features/settings/pages/settings/settings.component';
import { NewTicketComponent } from './features/tickets/pages/new-ticket/new-ticket.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: 'new-ticket', 
        component: NewTicketComponent },
      {
        path: 'agents',
        component: AgentsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
