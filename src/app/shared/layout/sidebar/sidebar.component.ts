import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, NgFor } from '@angular/common';
import { AppInfoService } from '../../services/app-info.service';
import { map, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AppInfo } from '../../models/interfaces/appInfo.model';
import { NavItem } from '../../models/interfaces/navItem.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
navService = inject(NavService)
appInfoService = inject(AppInfoService)
sanitizer = inject(DomSanitizer)

navItems$: Observable<NavItem[]> = this.navService.getNavItems();
appInfo$: Observable<AppInfo> = this.appInfoService.getAppInfo();


sanitizedNavItems = 
  this.navService.getNavItems().pipe(
    map(items =>
      items.map(item => ({
        ...item,
        icon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
      }))
    )
  )
}
