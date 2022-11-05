import { CdkPortal, ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PortalService } from '../services/portal.service';
import { ActionButtonSaveComponent } from '../shared/components/action-button-save/action-button-save.component';
import { ActionButtonComponent } from '../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal;
  constructor(private portalBridgeService: PortalService) {}
  ngAfterViewInit(): void {
    // console.log(this.portalContent);
  }

  ngOnInit() {
    // console.log(this.portalContent);
    // this.portalBridgeService.setPortal(cmpPortal);
    // const cmpPortal = new ComponentPortal(ActionButtonSaveComponent);
    // this.portalBridgeService.setPortal(cmpPortal);
  }
  ngOnDestroy() {
    this.portalBridgeService.setPortal(null);
    // if (this.portalContent) this.portalContent.detach();
  }

  actionButtonClick() {
    console.log('EE');
  }

  changeComponent(color) {
    let actionButtonC: ComponentPortal<any> = new ComponentPortal(
      ActionButtonComponent
    );
    if (color == 'green')
      actionButtonC = new ComponentPortal(ActionButtonSaveComponent);
    this.portalBridgeService.setPortal(actionButtonC);
  }
}
