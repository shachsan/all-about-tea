import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient, private auth:AuthService) { }

  signup(credential:any){
    this.http.post('http://localhost:3000/user/signup',credential)
      .subscribe(res=>{
        console.log('signup response', res);
      })
  }

  login(credential:any){
    this.http.post<{message:string, token:string}>('http://localhost:3000/user/login', credential)
      .subscribe(res=>{
        
        this.auth.storeToken(res.token);
      })
  }
}
