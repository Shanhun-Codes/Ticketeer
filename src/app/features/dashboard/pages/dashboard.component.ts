import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from "../../../shared/layout/header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
