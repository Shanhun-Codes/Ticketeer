import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/layout/header/header.component";
import { RouterOutlet } from "@angular/router";
import { TicketInfoComponent } from "../../features/tickets/pages/ticket-info/ticket-info.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, TicketInfoComponent]
})
export class MainLayoutComponent {

}
