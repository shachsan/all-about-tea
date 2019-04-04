import { Product } from './product.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
// import "rxjs/add/observable/from";


@Injectable() //This decorator tells Angular that this class will be used as service, which allows other classes to
            // to access its functionality through a feature called dependency injection
export class StaticDataSource implements OnInit{
    private products:Product[]=[
        new Product('Darjeeling Tea', 'Black tea', 'black tea', 22.50, 'reg', 'Mariage', 16, 'oz','https://cdn.shopify.com/s/files/1/1935/9089/products/mariage-freres-darjeeling-princeton-black-tea-tin_800x.jpg?v=1497906447'),
        new Product('Eros Tea', 'Black tea', 'black tea', 20.50, 'reg', 'Mariage', 30, 'bags','https://images-na.ssl-images-amazon.com/images/I/51IBrd4JbkL._SY355_.jpg'),
        new Product('Japanese Green Tea', 'Green tea', 'Green tea', 12.50, 'reg', 'Dean & Deluca', 16, 'oz', 'https://www.deandeluca.com/media/catalog/product/cache/1/small_image/400x/9df78eab33525d08d6e5fb8d27136e95/3/6/362075_1_1.jpg'),
        new Product('Silver Moon', 'White tea', 'white tea', 18, 'reg', 'TWG TEA', 12, 'oz', 'https://www.davidjones.com/productimages/thumb/1/1439517_11890550_1140711.jpg'),
        new Product('White House Tea', 'White tea', 'white tea', 18, 'reg', 'TWG TEA', 12, 'oz', 'http://twgtea.com/Files/Images/TWG-Tea/Products/detailzoom1200x900/TCTWG6042.jpg'),
        new Product('Japanese Green Tea', 'Green tea', 'Green tea', 10.50, 'reg', 'Republic of Tea', 10, 'oz', 'https://static.trotcdn.com/images/325/v00586.jpg'),
        new Product('Russian Blend Tea', 'Black tea', 'black tea', 22.50, 'reg', 'Palias de thes', 16, 'oz', 'http://cdn.shopify.com/s/files/1/2454/8899/products/7-citrus-russian-blend-black-tea-palais-des-thes-palais-des-thes-palais-des-thes_1024x1024.png?v=1513374900'),
    ];

    ngOnInit(){
       
    }

    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    addProduct(product:Product){
        console.log(this.products);
        this.products.push(product);
    }
};
