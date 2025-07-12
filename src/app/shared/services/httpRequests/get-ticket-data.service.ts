import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/enviornment';
import { catchError, interval, Observable, startWith, switchMap, throwError } from 'rxjs';
import { Ticket } from '../../models/ticket/ticket.model';
import { TicketStatus } from '../../models/ticket/interfaces/status.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GetTicketDataService {
private http = inject(HttpClient)
private baseUrl= `${environment.baseUrl}`


getLiveTickets(): Observable<Ticket[]> {
  return interval(30000).pipe(
    startWith(0), 
    switchMap(() => this.http.get<Ticket[]>(`${this.baseUrl}/tickets`)),
    catchError(err => throwError(() => err))
  );
}

getStatus(){
  return (this.http.get<TicketStatus[]>(`${this.baseUrl}/statuses`))
}

}
