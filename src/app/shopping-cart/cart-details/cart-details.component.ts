import { Component, OnInit } from '@angular/core';
import { Cart, ItemList } from 'src/app/models/Cart/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(private cart:Cart) { }

  get cartItems():ItemList[]{
    console.log(this.cart.itemList);
    return this.cart.itemList;
  }

  get cartTotalPrice():number{
    return this.cart.cartTotalPrice;
  }
  ngOnInit() {
  }

}
