import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userLoggedIn:boolean=false;
  // this.auth.isLoggedIn().subscribe(status=>this.userLoggedIn=status)
  constructor(private auth:AuthService) {
   }
  
  logout(){
    this.auth.logout();
    // this.userLoggedIn=this.auth.userIsLoggedIn;
    // this.auth.isLoggedIn()
    //     .subscribe(status=>this.userLoggedIn=status)
  }

  // get logginStatus():boolean{
  //   return this.userLoggedIn=this.auth.userIsLoggedIn;
  // }

  
  ngOnInit() {
    this.auth.userLoggedIn()
      .then(isLoggedIn=>this.userLoggedIn=isLoggedIn);

      this.auth.isLoggedIn().subscribe(status => this.userLoggedIn=status);
     
    // this.userLoggedIn=this.auth.userIsLoggedIn;
  }

}
