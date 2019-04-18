import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserBasic } from '../models/user.basic.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userLoggedIn:boolean=false;
  currentUser:UserBasic;
  currentUserName: string;
  constructor(private auth:AuthService) {
   }

  logout(){
    this.auth.logout();
  }

  ngOnInit() {
    this.auth.userLoggedIn()
      .then(isLoggedIn=>this.userLoggedIn=isLoggedIn)
      .then(()=>{
        this.currentUser=this.auth.currentUserBasic,
        this.currentUserName=this.currentUser.first_name;
      });
      
      this.auth.isLoggedIn().subscribe(status => this.userLoggedIn=status);
      this.auth.getCurrentUser().subscribe(user => {
        this.currentUser=user;
        this.currentUserName=this.currentUser.first_name;
      })
      // this.auth.getCurrentUser().subscribe(user => this.currentUserName=user.first_name);
      
  }

}
