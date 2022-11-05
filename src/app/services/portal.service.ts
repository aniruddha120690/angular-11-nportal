import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type AppPortal = TemplatePortal | ComponentPortal<unknown>;

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  private activePortal = new BehaviorSubject<AppPortal>(null);

  readonly portal$ = this.activePortal.asObservable();

  constructor() {}

  setPortal(portal: AppPortal) {
    // console.log('Service', portal);
    this.activePortal.next(portal);
  }
}
