import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.dataSouce';
import { Product } from './product.model';

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private selectCatItems:Product[]=[];
    private renderItems:Product[]=[];
    private currentSelectCat:string='';
    private categories:string[]=[];
    private brands:string[]=[];
    // private categoryProducts:Product[]=[];
    constructor(private dataSource:StaticDataSource){
        dataSource.getProducts().subscribe(
            data=>{
                // console.log("products", data);
                this.products=data;
                this.selectCatItems=data;
                this.renderItems=data;
                this.categories=data.map(p=>p.category);
                this.brands=data.map(p=>p.brand)
            }
        );
    }

    setProducts(cat?:string){
        if(cat===undefined || cat===''){
            console.log('inside undefined');
            this.selectCatItems=[...this.products];
            this.renderItems=this.selectCatItems;
            this.currentSelectCat=cat;
        }else{
            console.log('inside else');
            this.currentSelectCat=cat;
            this.selectCatItems=this.products.filter(p=>p.category===cat);
            this.renderItems=this.selectCatItems;
        }
    }

    setItemsPerPage(pageIndex:number, itemsPerPage:number){
        // console.log(pageIndex, itemsPerPage);
        // let items=this.products.filter(p=>p.category===cat)
        this.renderItems=this.selectCatItems.slice(pageIndex, itemsPerPage);
    }

    getItemsCount():number{
       return this.selectCatItems.length;
    }

    getProducts():Product[]{
        return this.renderItems;
        
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