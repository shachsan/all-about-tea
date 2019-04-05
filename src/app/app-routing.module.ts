import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './shopping-cart/cart-details/cart-details.component';
import { ShopComponent } from './shop/shop.component';
import { AuthGuard } from './auth.guard';
// import { ShopContainerComponent } from './shop-container/shop-container.component';

const routes: Routes = [
  {path:'', component:ShopComponent},
  {path:'cart', component:CartDetailsComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
