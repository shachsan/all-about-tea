import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenName } from '@angular/compiler';
import { ProductRepository } from './models/product.repository';

@Injectable()
export class AuthService {
  renderLoginForm=false;
  // targetRoute:Array<string>=[];
  // loggedIn:boolean=false;
  // token:string=null;
  constructor(private router:Router, private repo:ProductRepository) { }

  storeToken(tok:any){
    // this.token=token;
    localStorage.setItem('token', tok)
  }

  getLocalToken():any{
    return localStorage.getItem('token');
  }

  userLoggedIn():boolean{
    console.log('localStorage', this.getLocalToken());
    return this.getLocalToken()===null ? false :true;
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
