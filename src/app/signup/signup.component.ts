import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private httpReq:HttpRequestService) { }

  onSubmit(){
    console.log('sign up data', this.signupForm.value);
    this.httpReq.signup(this.signupForm.value)
  }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    })
  }

}
