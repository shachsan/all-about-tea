import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepository } from './models/product.repository';
import { HttpRequestService } from './http-request.service';
import { of, Observable, Subject } from 'rxjs';
// import {tap, switchMap, catchError, } from 'rxjs/operators';
import { UserBasic } from './models/user.basic.model';

@Injectable()
export class AuthService {
  renderLoginForm=false;
  userIsLoggedIn=false;
  currentUserBasic:UserBasic;
  private loginState=new Subject<boolean>();
  private currentUser=new Subject<UserBasic>();

  constructor(private router:Router, private repo:ProductRepository, 
              private httpReq:HttpRequestService) {}

  storeToken(tok:any){
    localStorage.setItem('token', tok)
  }

  storeCurrentUserBasicInfo(info:UserBasic){
    this.currentUserBasic=info;
    this.currentUser.next(this.currentUserBasic);

  }

  getLocalToken():any{
    return localStorage.getItem('token');
  }

  getCurrentUser():Observable<UserBasic>{
    return this.currentUser.asObservable();
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
          .then(user=>{
            console.log('response token verification:', user);
            this.currentUserBasic=user.user;
            this.currentUser.next(this.currentUserBasic);
            return this.userIsLoggedIn=user.valid})
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
