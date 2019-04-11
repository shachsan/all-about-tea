import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  signup(credential:any){
    this.http.post('http://localhost:3000/user/signup',credential)
      .subscribe(res=>{
        console.log('signup response', res);
      })
  }

  login(credential:any){
    this.http.post('http://localhost:3000/user/login', credential)
      .subscribe(res=>{
        console.log('login response', res);
      })
  }
}
