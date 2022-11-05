import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { AppComponents } from './components';
import { ActionButtonAreaComponent } from '../action-button-area/action-button-area.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { ActionButtonSaveComponent } from './components/action-button-save/action-button-save.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [ActionButtonComponent, ActionButtonSaveComponent],
  exports: [ActionButtonComponent, PortalModule],
})
export class SharedModule {}
