import { Product } from './product.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import "rxjs/add/observable/from";


@Injectable() //This decorator tells Angular that this class will be used as service, which allows other classes to
            // to access its functionality through a feature called dependency injection
export class StaticDataSource implements OnInit{
    // private products:Product[];

    constructor(private http:HttpClient) {}
  

    ngOnInit(){
  
    }

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:3000/') //the http.get methods will return observale
    }

    addProduct(product:Product){
        // console.log(this.products);
        // this.products.push(product);
    }
};
