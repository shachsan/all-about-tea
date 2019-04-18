import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepository } from './models/product.repository';
import { HttpRequestService } from './http-request.service';
import { of, Observable, Subject } from 'rxjs';
// import {tap, switchMap, catchError, } from 'rxjs/operators';

@Injectable()
export class AuthService {
  renderLoginForm=false;
  userIsLoggedIn=false;
  private loginState=new Subject<boolean>();

  constructor(private router:Router, private repo:ProductRepository, 
              private httpReq:HttpRequestService) {}

  storeToken(tok:any){
    localStorage.setItem('token', tok)
  }

  getLocalToken():any{
    return localStorage.getItem('token');
  }

  isLoggedIn():Observable<boolean>{
    return this.loginState.asObservable();
  }


  async userLoggedIn():Promise<boolean>{
    // Make sure this is sync or need to be chained with the observable below
    const token = this.getLocalToken();
    console.log('token:', token);

    if(!token){
        return false;
    } else {
       return await this.httpReq.verifyToken(token)
          .then(res=>res.json())
          .then(tokenValid=>{
            console.log('response token verification:', tokenValid);
            return this.userIsLoggedIn=tokenValid.valid})
    }
    // return this.userIsLoggedIn;
}

 

  logout(){
    localStorage.clear();
    this.userIsLoggedIn=false;
    this.loginState.next(this.userIsLoggedIn)
    this.repo.resetHomePage();
    this.router.navigate(['/']);
  }

  login(){
    this.userIsLoggedIn=true;
    this.loginState.next(this.userIsLoggedIn)
    // if(credential.username==='sanjay' && credential.password==='sai'){
    //   this.loggedIn=true;
    //   this.renderLoginForm=false;
    //   this.router.navigate(['/cart']);
    // }
  }
}
