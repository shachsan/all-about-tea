import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  signup(credential:any){
    this.http.post('http://localhost:3000/users/signup',credential)
      .subscribe(res=>{
        console.log('signup response', res);
      })
  }

  login(credential:any):Observable<{message:string, success:boolean, token:string}>{
    return this.http.post<{message:string, success:boolean, token:string}>('http://localhost:3000/users/login', credential)
  }

  verifyToken(token:string){
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':token
    })
    return this.http.post<{message:string, valid:Boolean}>('http://localhost:3000/users/authenticate', null, {headers:headers})
  }
}
