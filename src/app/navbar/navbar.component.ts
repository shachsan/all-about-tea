import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // userLoggedIn:boolean=false;
  constructor(private auth:AuthService) { }

  get userLoggedIn():boolean{
    return this.auth.userLoggedIn();
  }

  logout(){
    this.auth.logout();
  }
  ngOnInit() {
  }

}
