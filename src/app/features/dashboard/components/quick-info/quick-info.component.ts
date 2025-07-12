import { Component, Input } from '@angular/core';
import { Ticket } from '../../../../shared/models/ticket/ticket.model';
import { NgClass, NgFor } from '@angular/common';
import { TicketStatus } from '../../../../shared/models/ticket/interfaces/status.model';
import { StatusClassPipe } from '../../../../shared/utils/pipes/status-class.pipe';

@Component({
  selector: 'app-quick-info',
  standalone: true,
  imports:[NgFor, NgClass, StatusClassPipe],
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.css']
})
export class QuickInfoComponent {
@Input({ required: true }) tickets!: Ticket[]
@Input({ required: true }) statuses!: TicketStatus[]

countTicketsPerStatus() {
  return this.statuses?.map(status => {
    const count = this.tickets.filter(ticket => ticket.status === status.name).length;
    return {
      name: status.name,
      count
    };
  }) ?? [];
}





}
