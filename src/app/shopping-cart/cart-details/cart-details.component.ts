import { Component, OnInit } from '@angular/core';
import { Cart, ItemList } from 'src/app/models/Cart/cart.model';
import { Product } from '../../models/product.model';

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

  editQty(product:Product, editType:string){
    this.cart.editQuanity(product, editType)
  }

 
  ngOnInit() {
  }

}
