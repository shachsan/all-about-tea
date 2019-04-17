import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLoggedIn:boolean=false;
  constructor(private auth:AuthService) { }

  get loggedIn():boolean{
    
    this.auth.userLoggedIn().subscribe(isLoggedIn=>this.userLoggedIn=isLoggedIn);
    return this.userLoggedIn;
  }

  logout(){
    this.auth.logout();
  }
  ngOnInit() {
  }

}
