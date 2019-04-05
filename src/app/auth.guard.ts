import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopComponent } from './shop/shop.component';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // private firstVisit=true;
  constructor(private router:Router, private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('firstVisit',this.firstVisit);
        if(this.auth.loggedIn){
          return true;
        }else{
          this.router.navigate(['']);
          this.auth.renderLoginForm=true;
          return false;
        }
      }
  }
  

