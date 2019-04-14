import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HttpRequestService } from 'src/app/http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  redirectRoute=[];

  constructor(private auth:AuthService, private httpReq:HttpRequestService, private router: Router) { }

  onSubmit(){
    console.log('form data', this.loginForm);
    // this.auth.login(this.loginForm.value);
    this.httpReq.login(this.loginForm.value)
    if(this.auth.userLoggedIn){
      console.log('target route', this.redirectRoute);
    this.router.navigate(['/checkout']);
    }

  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    });
    this.redirectRoute.push(this.auth.targetRoute)
  }

}
