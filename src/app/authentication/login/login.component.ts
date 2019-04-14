import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HttpRequestService } from 'src/app/http-request.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  targetUrl='';

  constructor(private auth:AuthService, 
              private httpReq:HttpRequestService, 
              private router: Router,
              private authGuard:AuthGuard
              ) { }

  onSubmit(){
    console.log('form data', this.loginForm);
    // this.auth.login(this.loginForm.value);
    this.httpReq.login(this.loginForm.value)
      .subscribe(res => {
        this.auth.storeToken(res.token);
        this.router.navigateByUrl(this.targetUrl);
      })
    // if(this.auth.userLoggedIn()){
    //   console.log('userlogged in', this.auth.userLoggedIn());
    //   console.log('user logged in, redirecting to checkout');
    // }else{
    //   console.log('token not set yet');
    // }

  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    });
    this.targetUrl=this.authGuard.targetRoute;
  }

}
