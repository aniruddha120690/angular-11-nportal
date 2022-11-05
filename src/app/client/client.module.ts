import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: '',
    component: ClientComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ClientComponent],
})
export class ClientModule {}