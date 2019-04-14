import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { ShopComponent } from './shop/shop.component';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // private firstVisit=true;
  constructor(private router:Router, private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('firstVisit',this.firstVisit);
        if(this.auth.userLoggedIn()){
          // this.router.navigate(['/checkout'])
          return true;
        }else{
          // this.router.navigate(['']);
          this.auth.renderLoginForm=true;
          return false;
        }
      }
  }
  

