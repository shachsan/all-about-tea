import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/cart-summary/shopping-cart.component';
import { CartDetailsComponent } from './shopping-cart/cart-details/cart-details.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductRepository } from './models/product.repository';
import { StaticDataSource } from './models/static.dataSouce';
import { ReactiveFormsModule } from '@angular/forms';
import { Cart } from './models/Cart/cart.model';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    LeftSideBarComponent,
    AddNewProductComponent,
    ShoppingCartComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [ProductRepository, StaticDataSource, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
