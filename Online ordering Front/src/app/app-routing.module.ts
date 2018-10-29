import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddshopComponent } from './addshop/addshop.component';
import { ShopsComponent } from './shops/shops.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:AccountsComponent},
  {path:'addShop',component:AddshopComponent},
  {path:'shops',component:ShopsComponent},
  {path:'client',component:ClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
