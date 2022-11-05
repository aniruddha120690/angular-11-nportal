import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from '../shared/shared.module';
import { ActionButtonComponent } from '../shared/components/action-button/action-button.component';

const ROUTES = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  entryComponents: [
    // ActionButtonComponent,
    // a
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    PortalModule,
    SharedModule,
  ],
  declarations: [
    UsersComponent,
    // ActionButtonComponent
  ],
})
export class UsersModule {}
