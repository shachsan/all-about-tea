import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.dataSouce';
import { Product } from './product.model';

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private categories:string[]=[];
    private brands:string[]=[];
    constructor(private dataSource:StaticDataSource){
        dataSource.getProducts().subscribe(
            data=>{
                this.products=data;
                this.categories=data.map(p=>p.category)
            }
        );
    }

    getProducts(category:string=null):Product[]{
        return this.products.filter(p=>p.category==category)
    }

    getProduct(id:number):Product{
        return this.products.find(p=>p.id==id);
    }

    getCategories():string[]{
        return this.categories;
    }

    getBrands():string[]{
        return this.brands;
    }
}