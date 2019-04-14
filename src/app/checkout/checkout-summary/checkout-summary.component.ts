import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart/cart.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.css']
})
export class CheckoutSummaryComponent implements OnInit {
  
  constructor(private cart:Cart, 
              private router:Router, 
              private route:ActivatedRoute,
              private auth:AuthService){}


  get cartTotalPrice():number{
    return this.cart.cartTotalPrice;
  }

  get shippingCharge():number{
    if(this.cartTotalPrice>=50){
      return 0;
    }else{
      return 10;
    }
  }

  get checkoutTotal():number{
    return this.cartTotalPrice+this.shippingCharge;
  }

  onClickCheckout(){
    this.auth.targetRoute=[];
    this.auth.targetRoute.push('/checkout');
    this.router.navigate(['/checkout'])
  }

  ngOnInit() {
  }

}
