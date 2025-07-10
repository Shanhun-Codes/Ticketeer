import { Injectable } from '@angular/core';
import { AppInfo } from '../models/interfaces/appInfo.model';
import { Observable, of } from 'rxjs';

import APP_INFO from '../staticData/AppInfo'

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

getAppInfo(): Observable<AppInfo> {
  return of(APP_INFO)
}

}
