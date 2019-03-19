import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import "rxjs/add/observable/from";


@Injectable() //This decorator tells Angular that this class will be used as service, which allows other classes to
            // to access its functionality through a feature called dependency injection
export class StaticDataSource {
    private products:Product[]=[
        new Product('Darjeeling Tea', 'Black tea', 'black tea', 22.50, 'reg', 'Mariage', 16, 'oz'),
        new Product('Eros Tea', 'Black tea', 'black tea', 20.50, 'reg', 'Mariage', 30, 'bags'),
        new Product('French Breakfast Tea', 'Black tea', 'black tea', 12.50, 'reg', 'Dean & Deluca', 16, 'oz'),
        new Product('Silver Moon', 'White tea', 'white tea', 18, 'reg', 'TWG TEA', 12, 'oz'),
        new Product('White House Tea', 'White tea', 'white tea', 18, 'reg', 'TWG TEA', 12, 'oz'),
        new Product('Japanese Green Tea', 'Green tea', 'Green tea', 10.50, 'reg', 'Republic of Tea', 10, 'oz'),
        new Product('Darjeeling Tea', 'Black tea', 'black tea', 22.50, 'reg', 'Mariage', 16, 'oz'),
    ];

    getProducts():Observable<Product[]>{
        return Observable.from([this.products]);
    }
};
