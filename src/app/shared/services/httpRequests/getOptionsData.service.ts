import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPriority } from '../../models/ticket/interfaces/priority.model';
import { environment } from '../../../environments/enviornment';
import { TicketStatus } from '../../models/ticket/interfaces/status.model';

@Injectable({
  providedIn: 'root',
})
export class GetOptionsDataService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;


  getPriotrityOptionsData(): Observable<TicketPriority[]> {
    return this.http.get<TicketPriority[]>(`${this.baseUrl}/priorities`);
  }

  getStatusOptionsData() {
    return this.http.get<TicketStatus[]>(`${this.baseUrl}/statuses`);
  }

  getAssignedUserOtionsId() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getCategoryOptionsData() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getUserRoles() {
    return this.http.get(`${this.baseUrl}/users`)
  }
}
