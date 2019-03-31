import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart/cart.model';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:Cart) {}

  get itemCount():any{
    if(this.cart.itemCount>10){
      return "10+";
    }else{
      return this.cart.itemCount;
    }
  }

  get itemPrice():any{
      return this.cart.cartTotalPrice;
  }

  checkDigit():string{
    return this.itemCount < 10 ? " qty single-digit-qty" : "qty dbl-digit-qty";
  }

  ngOnInit() {}

}
