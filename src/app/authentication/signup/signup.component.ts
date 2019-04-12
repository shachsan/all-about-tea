import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequestService } from '../../http-request.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  sameBillShipAddress:boolean=false;
  constructor(private httpReq:HttpRequestService) { }

  onChangeBilling(){
     if(this.signupForm.value.same_as_billing){
       this.sameBillShipAddress=true;
       this.signupForm.value.billing_apt=this.signupForm.value.apt;
       this.signupForm.value.billing_street_address=this.signupForm.value.street_address;
       this.signupForm.value.billing_city=this.signupForm.value.city;
       this.signupForm.value.billing_zipcode=this.signupForm.value.zipcode;
       this.signupForm.value.billing_state=this.signupForm.value.state;
       console.log(this.signupForm);
      }else{
        this.sameBillShipAddress=false;
     }
  }

  onSubmit(){
    console.log('sign up data', this.signupForm.value);
    this.httpReq.signup(this.signupForm.value)
  }

  ngOnInit() {
    this.signupForm=new FormGroup({
      username:new FormControl(null),
      password:new FormControl(null),
      first_name: new FormControl(null),
      middle_initial: new FormControl(null),
      last_name: new FormControl(null),
      dob: new FormControl(null),
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
