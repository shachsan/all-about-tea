import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenName } from '@angular/compiler';
import { ProductRepository } from './models/product.repository';

@Injectable()
export class AuthService {
  renderLoginForm=false;

  constructor(private router:Router, private repo:ProductRepository) { }

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
