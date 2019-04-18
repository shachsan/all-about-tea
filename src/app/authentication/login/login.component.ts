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
  wrongUsername:boolean=false;
  wrongPass:boolean=false;

  constructor(private auth:AuthService, 
              private httpReq:HttpRequestService, 
              private router: Router,
              private authGuard:AuthGuard,
              ) { }

  onSubmit(){
    console.log('target url', this.targetUrl);
    this.httpReq.login(this.loginForm.value)
      .subscribe(res => {
        console.log('server response for login ====> ', res);
        this.auth.storeCurrentUserBasicInfo(res.user);
        this.auth.storeToken(res.token);
        this.auth.login();
        this.router.navigateByUrl(this.targetUrl);
      },
      err =>{
        console.log('error =====> ', err.error);
        if(err.error.error==="wrong email"){
          this.wrongUsername=true;
        }else if(err.error.error==="wrong password"){
          this.wrongPass=true;
        }
      })
      }
 


  ngOnInit() {
    this.loginForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    });
    this.targetUrl=this.authGuard.targetRoute;
  }

}
