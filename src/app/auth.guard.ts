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
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('inside authguard, return value from userLoggedIn:', this.auth.userLoggedIn().then(data=>this.userLoggedIn=data));
      return this.auth.userLoggedIn()
        .then(isLoggedIn=>this.userLoggedIn=isLoggedIn)
        .then(()=>{
            if(this.userLoggedIn){
                  console.log('inside authguard, user was logged in. this.userLoggedIn==>', this.userLoggedIn);
              return true;
            }else{
            // console.log('inside authguard, user was not logged in. this.userLoggedIn==>', this.userLoggedIn);
            // console.log('state url', state.url);
            this.targetRoute=state.url;
            this.auth.renderLoginForm=true;
            return false;
            }
      })
  }
}
  

