import { Component, OnInit} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';
import { Cart } from '../models/Cart/cart.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  // itemsPerPage:number=3;
  totalPages:number[]=[];
  beginPageIndex:number=0;
  pageBtnsToDisplay:number=3;
  // showLoginForm:boolean=false;
  

  constructor(private repository:ProductRepository, private cart:Cart, private auth:AuthService) {}

  changePerPageView(number:number){
    this.repository.itemsPerPage=+number;
    this.repository.pageIndex=0;
    this.repository.selectedPage=1;
    this.repository.setItemsPerPage();
  }
  get itemsPerPage(){
    return this.repository.itemsPerPage;
  }

  get teas():Product[]{
    console.log('teas', this.repository.getProducts());
    return this.repository.getProducts();
  }
  
  get itemsCount():number{
    return this.repository.getItemsCount();
  }
  
  
  get pageNumbers():number[]{
    this.totalPages=Array(Math.ceil(this.itemsCount/this.repository.itemsPerPage)).fill(1).map((x:number, i:number)=>i+1);
    return this.totalPages.slice(this.beginPgIdx,this.lastPageIndex);
  }
  
  get lastPageIndex():number{
    if(this.totalPages.length<=this.pageBtnsToDisplay){
      return this.beginPageIndex+this.totalPages.length;
    }else{
      return this.beginPageIndex+this.pageBtnsToDisplay;
    }
  }

  
  get beginPgIdx():number{
    if(this.repository.selectedPage===1){
      return this.beginPageIndex=0;
    }else{
      return this.beginPageIndex;
    }
  }
  
  get selectedPage():number{
    return this.repository.selectedPage;
  }
  
  get categories():string[]{
    return this.repository.getCategories();
  }

  get brands():string[]{
    return this.repository.getBrands();
  }

  getNextPageItems(){
    this.repository.pageIndex=(this.repository.selectedPage-1)*this.repository.itemsPerPage;
    this.repository.setItemsPerPage();
  }


  showPreviousPageBtn(){
    if(this.repository.selectedPage-1===this.beginPageIndex){
      this.beginPageIndex--;
      this.repository.selectedPage--;
      this.getNextPageItems();
    }else{
      this.repository.selectedPage--;
      this.getNextPageItems();
    }
    
  }
  
  showNextPageBtn(){
    if(this.repository.selectedPage===this.lastPageIndex){
      this.beginPageIndex++;
      this.repository.selectedPage++;
      this.getNextPageItems();
    }else{
      this.repository.selectedPage++;
      this.getNextPageItems();
    }
  }

  get ifLastPage():boolean{
    return this.lastPageIndex===this.totalPages.length;
  }

  ifFirstPage():boolean{
    return this.beginPgIdx===0;
  }

    
  setPageNum(pageNum:number){
    this.repository.selectedPage=pageNum;
    this.getNextPageItems();
  }

  //shopping cart implementation
  addToCart(product:Product){
    // console.log(product);
    this.cart.addItemToCart(product);
  }

  cartItemQty(product:Product){
    // console.log(product);
    return this.cart.getCartItemQty(product);
  }
 
  ngOnInit() {
    // this.itemsPerPage=this.repository.itemsPerPage;
    this.auth.renderLoginForm=false;
  }


}
