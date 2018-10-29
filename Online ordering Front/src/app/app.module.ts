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
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { ShopComponent } from './shop/shop.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
>>>>>>> 84945c62fbaf42b2914ab41bbc3781e0fdb8ba3b


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    ShopsComponent,
    ClientComponent,
    AddshopComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    ShopComponent,
    CustomerDetailsComponent
>>>>>>> 84945c62fbaf42b2914ab41bbc3781e0fdb8ba3b
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NavbarModule,
    WavesModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
<<<<<<< HEAD
  
=======
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
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'customer-details',
        component: CustomerDetailsComponent
      }

    ])
>>>>>>> 84945c62fbaf42b2914ab41bbc3781e0fdb8ba3b
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
