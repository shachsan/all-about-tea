import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
// import { ShopComponent } from './shop/shop.component';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // private firstVisit=true;
  targetRoute:string='';
  constructor(private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.auth.userLoggedIn()){
          console.log('inside authguard, user was logged in');
          return true;
        }else{
          console.log('inside authguard, user was not logged in');
          // console.log('state url', state.url);
          this.targetRoute=state.url;
          this.auth.renderLoginForm=true;
          return false;
        }
      }
  }
  

