import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
// import { ShopComponent } from './shop/shop.component';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // private firstVisit=true;
  userLoggedIn=false;
  targetRoute:string='';
  constructor(private auth:AuthService){
    console.log('====inside authguard constructor===>');
    
    this.auth.isLoggedIn()
    .subscribe(status => {
      console.log('====inside authguard constructor>subscribe===>');
              
              this.userLoggedIn=status
            console.log('this.userLoggedIn inside authguard constructor subscription', this.userLoggedIn);});
            }
            canActivate(
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                
                console.log('authguard if userLoggedIn===>', this.userLoggedIn);

      // return this.auth.userLoggedIn()
      //   .then(isLoggedIn=>this.userLoggedIn=isLoggedIn)
      //   .then(()=>{
      //       if(this.userLoggedIn){
      //             console.log('inside authguard, user was logged in. this.userLoggedIn==>', this.userLoggedIn);
      //         return true;
      //       }else{
            if(this.userLoggedIn){
              return true;
            }else{
            this.targetRoute=state.url;
            this.auth.renderLoginForm=true;
            return false;
            }
    
  }
}
  

