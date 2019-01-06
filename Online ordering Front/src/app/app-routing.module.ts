import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddshopComponent } from './addshop/addshop.component';
import { ShopsComponent } from './shops/shops.component';
import { ClientComponent } from './client/client.component';
import { MangeShopComponent } from './mange-shop/mange-shop.component';
import { ShopComponent } from './shop/shop.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:AccountsComponent},
  {path:'addshop',component:AddshopComponent},
  {path:'shops',component:ShopsComponent},
  {path:'client',component:ClientComponent},
  {path:"manageshop/:id",component:MangeShopComponent},
  {path: 'shop',component: ShopComponent},
  {path: 'customer-details',component: CustomerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
