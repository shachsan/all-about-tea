import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.dataSouce';
import { Product } from './product.model';

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private selectCatItems:Product[]=[];
    private renderItems:Product[]=[];
    public pageIndex:number=0;
    public itemsPerPage:number=3;
    public selectedPage:number=1;
    private currentSelectCat:string='';
    private categories:string[]=[];
    private brands:string[]=[];
    constructor(private dataSource:StaticDataSource){
        dataSource.getProducts().subscribe(
            data=>{
                this.products=data;
                this.selectCatItems=data;
                this.renderItems=this.selectCatItems.slice(this.pageIndex, this.pageIndex+this.itemsPerPage);
                this.categories=data.map(p=>p.category);
                this.brands=data.map(p=>p.brand)
            }
        );
    }

    setProducts(cat?:string){
        if(cat===undefined || cat===''){
            console.log('inside undefined');
            this.pageIndex=0;
            this.selectedPage=1;
            this.selectCatItems=[...this.products];
            this.renderItems=this.selectCatItems.slice(this.pageIndex, this.pageIndex+this.itemsPerPage);
            this.currentSelectCat=cat;
        }else{
            console.log('inside else');
            this.currentSelectCat=cat;
            this.pageIndex=0;
            this.selectedPage=1;
            this.selectCatItems=this.products.filter(p=>p.category===cat);
            this.renderItems=this.selectCatItems.slice(this.pageIndex, this.pageIndex+this.itemsPerPage);
        }
    }

    setItemsPerPage(){
        this.renderItems=this.selectCatItems.slice(this.pageIndex, this.pageIndex+this.itemsPerPage);
    }

    getItemsCount():number{
       return this.selectCatItems.length;
    }

    getProducts():Product[]{
        return this.renderItems;
        
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


    addProduct(product:Product){
        this.dataSource.addProduct(product);
    }
}