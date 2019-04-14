import { Component, OnInit } from '@angular/core';
import { Cart, ItemList } from 'src/app/models/Cart/cart.model';
import { Product } from '../../models/product.model';
import { AuthService } from 'src/app/auth.service';
// import { logging } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  // loggedIn:boolean=false;
  constructor(private cart:Cart, private auth:AuthService) { }

  get cartItems():ItemList[]{
    console.log(this.cart.itemList);
    return this.cart.itemList;
  }

  editQty(product:Product, editType:string){
    this.cart.editQuanity(product, editType)
  }

  get loggedIn():boolean{
    return this.auth.renderLoginForm;
  }

 
  ngOnInit() {
    // console.log('activated route', this.route);
    // this.loggedIn
  }

}
