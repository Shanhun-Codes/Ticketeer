import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { AppInfoService } from '../../services/app-info.service';
import { map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
navService = inject(NavService)
appInfoService = inject(AppInfoService)
sanitizer = inject(DomSanitizer)

navItems = toSignal(this.navService.getNavItems())
appInfo = toSignal(this.appInfoService.getAppInfo())

sanitizedNavItems = toSignal(
  this.navService.getNavItems().pipe(
    map(items =>
      items.map(item => ({
        ...item,
        icon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
      }))
    )
  )
);
}
