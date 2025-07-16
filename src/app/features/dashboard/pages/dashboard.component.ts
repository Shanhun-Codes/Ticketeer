import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, defer, of, tap } from 'rxjs';
import { TicketStatus } from '../../../shared/models/ticket/interfaces/status.model';
import { GetTicketDataService } from '../../../shared/services/httpRequests/get-ticket-data.service';
import { NgIf } from '@angular/common';
import { QuickInfoComponent } from '../components/quick-info/quick-info.component';
import { TicketTableComponent } from '../components/ticket-table/ticket-table.component';
import { RouterOutlet } from '@angular/router';
import { TicketInfoComponent } from "../../tickets/pages/ticket-info/ticket-info.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, QuickInfoComponent, TicketTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private getTicketDataService = inject(GetTicketDataService);
  statuses = toSignal<TicketStatus[]>(this.getTicketDataService.getStatus());

  loading = signal(true);
  error = signal<string | null>(null);

  tickets$ = defer(() => {
    this.loading.set(true);
    this.error.set(null);

    return this.getTicketDataService.getLiveTickets().pipe(
      tap(() => this.loading.set(false)),
      catchError((err) => {
        this.error.set(err.message || 'Unknown Error');
        return of([]);
      })
    );
  });

  tickets = toSignal(this.tickets$, { initialValue: [] });

  sortedTickets = computed(() => {
const tickets = [...this.tickets()].filter(
  (t) => t.status.toLowerCase() !== 'closed'
);

    const priorityOrder: { [key: string]: number } = {
      Critical: 0,
      High: 1,
      Medium: 2,
      Low: 3,
    };

    const getPriority = (priority: string): number =>
      priorityOrder[priority] ?? 999;

    tickets.sort((a, b) => {
      const priorityDiff = getPriority(a.priority) - getPriority(b.priority);
      if (priorityDiff !== 0) return priorityDiff;

      return (
        new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      );
    });

    return tickets;
  });
}
