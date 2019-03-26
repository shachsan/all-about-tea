import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.dataSouce';
import { Product } from './product.model';

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private productsCopy:Product[]=[];
    private categories:string[]=[];
    private brands:string[]=[];
    // private categoryProducts:Product[]=[];
    constructor(private dataSource:StaticDataSource){
        dataSource.getProducts().subscribe(
            data=>{
                // console.log("products", data);
                this.products=data;
                this.productsCopy=data;
                this.categories=data.map(p=>p.category);
                this.brands=data.map(p=>p.brand)
            }
        );
    }

    setProducts(cat?:string){
        if(cat===undefined || cat===''){
            console.log('inside undefined');
            this.productsCopy=[...this.products];
        }else{
            console.log('inside else');
            this.productsCopy=this.products.filter(p=>p.category===cat);
        }
    }

    getProducts():Product[]{
        return this.productsCopy;
        
    }

    // showPageitems()


    getProduct(id:number):Product{
        return this.products.find(p=>p.id==id);
    }

    getCategories():string[]{
        return this.categories;
    }

    getBrands():string[]{
        return this.brands;
    }


    addProduct(product:Product){
        this.dataSource.addProduct(product);
    }
}