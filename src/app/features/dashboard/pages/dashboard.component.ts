import { Component, inject, signal } from '@angular/core';
import { GetTicketDataService } from '../../../shared/services/httpRequests/get-ticket-data.service';
import { catchError, defer, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { QuickInfoComponent } from '../components/quick-info/quick-info.component';
import { TicketStatus } from '../../../shared/models/ticket/interfaces/status.model';
import { TicketTableComponent } from '../components/ticket-table/ticket-table.component';
import { RouterOutlet } from '../../../../../node_modules/@angular/router/index';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, QuickInfoComponent, TicketTableComponent, RouterOutlet],
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
}
