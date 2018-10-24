import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
// For MDB Angular Free
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { AccountsComponent } from './accounts/accounts.component';
import { ShopsComponent } from './shops/shops.component';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AddshopComponent } from './addshop/addshop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    ShopsComponent,
    ClientComponent,
    AddshopComponent
  ],
  imports: [
    NavbarModule,
    WavesModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'accounts',
        component:AccountsComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'shops',
        component: ShopsComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'addshop',
        component: AddshopComponent
      }

    ])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
