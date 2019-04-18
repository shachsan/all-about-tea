import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAuthModel } from './models/response.auth.model';

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

  login(credential:any):Observable<ResponseAuthModel>{
    return this.http.post<ResponseAuthModel>('http://localhost:3000/users/login', credential)
  }

  verifyToken(token:string){
    
    return fetch('http://localhost:3000/users/authenticate',{
        method:'POST',
        headers:{'Content-Type':'application/json',
                  'Authorization':token}
                })
    // return this.http.post<{message:string, valid:boolean}>('http://localhost:3000/users/authenticate', null, {headers:headers})
      // .map(res=>res.json())
            
  }
}
