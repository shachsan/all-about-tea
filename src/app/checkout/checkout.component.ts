import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  sameBillShipAddress:boolean=false;
  user:string='';

  constructor(private httpReq:HttpRequestService) { }

  onChangeBilling(){
    if(this.checkoutForm.value.same_as_billing){
      this.sameBillShipAddress=true;
      this.checkoutForm.value.billing_apt=this.checkoutForm.value.apt;
      this.checkoutForm.value.billing_street_address=this.checkoutForm.value.street_address;
      this.checkoutForm.value.billing_city=this.checkoutForm.value.city;
      this.checkoutForm.value.billing_zipcode=this.checkoutForm.value.zipcode;
      this.checkoutForm.value.billing_state=this.checkoutForm.value.state;
      console.log(this.checkoutForm);
     }else{
       this.sameBillShipAddress=false;
    }
 }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      street_address: new FormControl(null),
      apt: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      zipcode: new FormControl(null),
      same_as_billing: new FormControl(null),
      billing_street_address: new FormControl(null),
      billing_apt: new FormControl(null),
      billing_city: new FormControl(null),
      billing_state: new FormControl(null),
      billing_zipcode: new FormControl(null),
      fullName: new FormControl(null),
      cardNo: new FormControl(null),
      card_expiry: new FormControl(null),
      secret: new FormControl(null),
    })

    
  }

}
