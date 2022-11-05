import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from './shared/shared.module';
import { ActionButtonComponent } from './shared/components/action-button/action-button.component';
import { ActionButtonAreaComponent } from './action-button-area/action-button-area.component';
import { ActionButtonSaveComponent } from './shared/components/action-button-save/action-button-save.component';

const ROUTES: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((a) => a.UsersModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((a) => a.ClientModule),
  },
];

@NgModule({
  entryComponents: [
    ActionButtonComponent,
    ActionButtonSaveComponent,
    // a,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
  ],
  declarations: [AppComponent, HelloComponent, ActionButtonAreaComponent],

  bootstrap: [AppComponent],
})
export class AppModule {}
