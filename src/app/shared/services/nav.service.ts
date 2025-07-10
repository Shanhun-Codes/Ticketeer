import { Injectable } from '@angular/core';
import { NavItem } from '../models/interfaces/navItem.model';
import NAV_ITEMS from '../staticData/navItems';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {

  getNavItems(): Observable<NavItem[]> {
    return of(NAV_ITEMS);
  }
}
