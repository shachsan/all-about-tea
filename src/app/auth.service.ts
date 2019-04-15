import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepository } from './models/product.repository';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class AuthService {
  renderLoginForm=false;

  constructor(private router:Router, private repo:ProductRepository, private httpReq:HttpRequestService) { }

  storeToken(tok:any){
    localStorage.setItem('token', tok)
  }

  getLocalToken():any{
    return localStorage.getItem('token');
  }

  userLoggedIn():boolean{
    // console.log('localStorage', this.getLocalToken());
    // return this.getLocalToken()===null ? false :true;
    

    //Steps
    // 1. get the token from localStorage
    //2. if there is a token
        //2.1  verify if it is valid
            // if valid?, return true
            // if invalid?, return false

    //3. if there is no token, return false
    const token=this.getLocalToken();
    console.log('in auth service userloggedin, token:', token);
    if(!token){
      return false;
    }
    // return true;
    
    this.httpReq.verifyToken(token)
      .subscribe(res =>{
        if(res.valid){
          console.log('In auth service, token was verified');
          return true;
        }
        console.log('In auth service, token was not verified');
        return false;
      })
    

  }

  logout(){
    localStorage.clear();
    this.repo.resetHomePage();
    this.router.navigate(['/']);
  }

  login(credential:any){

    // if(credential.username==='sanjay' && credential.password==='sai'){
    //   this.loggedIn=true;
    //   this.renderLoginForm=false;
    //   this.router.navigate(['/cart']);
    // }
  }
}
