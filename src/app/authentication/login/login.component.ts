import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private auth:AuthService) { }

  onSubmit(){
    console.log('form data', this.loginForm);
    this.auth.login(this.loginForm.value);
  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    });
  }

}
