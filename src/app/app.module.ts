import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './auth/pages/login/login.component';
import {APP_ROUTES} from './app.routes';
import {NbThemeModule, NbLayoutModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {AngularMaterialModule} from './angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// Socket.io
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {environment} from '../environments/environment';

const config: SocketIoConfig = {url: environment.wsUrl, options: {}};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    SocketIoModule.forRoot(config)
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
