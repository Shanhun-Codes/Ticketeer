import { DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../../../shared/models/ticket/ticket.model';

@Component({
  selector: 'app-ticket-table',
  standalone: true,
  imports: [NgFor,NgClass, DatePipe],
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent {
@Input({ required: true }) tickets!: Ticket[]
@Output() ticketClickEvent = new EventEmitter<number>();

  getStatusClass(status: string) {
  return 'status-' + status.toLowerCase().replace(/\s/g, '-');
}

onTicketClickHandler(id: number){
  console.log(id);
  
this.ticketClickEvent.emit(id)
}
}
