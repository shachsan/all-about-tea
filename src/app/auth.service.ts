import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepository } from './models/product.repository';
import { HttpRequestService } from './http-request.service';
import { of, Observable } from 'rxjs';
import {tap, switchMap, catchError, } from 'rxjs/operators';

@Injectable()
export class AuthService {
  renderLoginForm=false;
  userIsLoggedIn=false;

  constructor(private router:Router, private repo:ProductRepository, 
              private httpReq:HttpRequestService) { 
                // this.init();
              }

  storeToken(tok:any){
    localStorage.setItem('token', tok)
  }

  getLocalToken():any{
    return localStorage.getItem('token');
  }

  // init(){
  //   const token=this.getLocalToken();
  //   console.log('in auth service init method, token:', token);
  //   if(!token){
  //     console.log('inside if(!token) block in auth service');
  //     this.userIsLoggedIn=false;
  //     // return false;
  //   }
  //   // return true;
    
  //  this.httpReq.verifyToken(token)
  //     .subscribe(async res =>{
  //       console.log('verification server response:', res);
  //       this.userIsLoggedIn= await res.valid;
  //       // return true;
  //       console.log('this.userIsLoggedIn:', this.userIsLoggedIn);
  //       // if(res.valid){
  //       //   console.log('In auth service, token was verified');
  //       //   this.userLoggedIn=true;
  //       //   // return true;
  //       // }
  //       // console.log('In auth service, token was not verified');
  //       // return false;
  //     },
  //     err =>{
  //       console.log('verification error:', err);
  //     })
  // }


//   userLoggedIn(): Observable<boolean>{
//     // Make sure this is sync or need to be chained with the observable below
//     const token = this.getLocalToken();
//     console.log('token:', token);

//     if(!token){
//         return of(false);
//     } else {
//         return this.httpReq.verifyToken(token).pipe(
//              // Use the tap operator to update some inner class variable
//              tap(res => this.userIsLoggedIn = res.valid),
//              // We do have the response, if there is ok you can return true. You can add additional validations.
//              switchMap((res) => res.valid ? of(true) : of(false)),
//              // Catch errors, do something with them
//              catchError((err) => of(false))
//         )
//     }
// }
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

  // userLoggedIn():boolean{
  // //   // console.log('localStorage', this.getLocalToken());
  // //   // return this.getLocalToken()===null ? false :true;
    

  //   //Steps
  //   // 1. get the token from localStorage
  //   //2. if there is a token
  //       //2.1  verify if it is valid
  //           // if valid?, return true
  //           // if invalid?, return false

  //   //3. if there is no token, return false
  //   console.log('<<<<<1>>>>>>');
  //   const token=this.getLocalToken();
  //   console.log('in auth service userloggedin, token:', token);
  //   if(!token){
  //     console.log('inside if(!token) block in auth service');
  //     return false;
  //   }
  //   // return true;
  //   console.log('<<<<<2>>>>>');
  //   this.httpReq.verifyToken(token)
  //     .subscribe(res =>{
  //       console.log('<<<<4>>>>');
  //       console.log('verification server response:', res);
  //       this.userIsLoggedIn=res.valid;
  //       console.log('this.userIsLoggedIn:', this.userIsLoggedIn);
  //       // if(res.valid){
  //       //   console.log('In auth service, token was verified');
  //       //   this.userLoggedIn=true;
  //       //   // return true;
  //       // }
  //       // console.log('In auth service, token was not verified');
  //       // return false;
  //     },
  //     err =>{
  //       console.log('verification error:', err);
  //     })
  //     console.log('<<<<5>>>>');
  //     return this.userIsLoggedIn;
      
  // }

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
