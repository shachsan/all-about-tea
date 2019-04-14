import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

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

  login(credential:any):Observable<{message:string, success:boolean, token:string}>{
    return this.http.post<{message:string, success:boolean, token:string}>('http://localhost:3000/user/login', credential)
  }
}
