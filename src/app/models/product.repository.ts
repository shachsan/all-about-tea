import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.dataSouce';
import { Product } from './product.model';
// import { HttpRequests } from '../http-requests/http.requests';
import { HttpClient } from '@angular/common/http';

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

    constructor(private dataSource:StaticDataSource, private http:HttpClient){
        dataSource.getProducts().subscribe(
            data=>{
                console.log('data from server', data);
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

    resetHomePage(){
        this.itemsPerPage=3;
        this.setProducts('');
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

   

    getCategories():string[]{
        return this.categories;
    }

    getBrands():string[]{
        return this.brands;
    }

    //fetch product for persistence. call addNewProduct methode of httpReq object to handle client request
    addProductToDb(product:Product){
        this.http.post<Product>('http://localhost:3000/products',product)
            .subscribe(res=>{
                this.products.push(res)//optimistic update.
            })
    }

}