import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, takeWhile } from 'rxjs';
import { AppPortal, PortalService } from '../services/portal.service';

@Component({
  selector: 'action-button-area',
  templateUrl: './action-button-area.component.html',
  styleUrls: ['./action-button-area.component.css'],
})
export class ActionButtonAreaComponent implements OnInit, OnDestroy {
  activePortal$: Observable<AppPortal>;
  activePortal: AppPortal;
  isLive: boolean = true;
  constructor(
    private portalBridgeService: PortalService,
    private _viewContainerRef: ViewContainerRef
  ) {}
  ngOnDestroy(): void {
    this.isLive = false;
  }

  ngOnInit() {
    // this.activePortal$ =
    this.portalBridgeService.portal$
      .pipe(takeWhile(() => this.isLive))
      .subscribe((data) => {
        // console.log('data', data);
        this.activePortal = data;
      });
  }
}
