import { Component, OnInit} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  itemsPerPage:number;
  totalPages:number[]=[];
  beginPageIndex:number=0;
  pageBtnsToDisplay:number=3;
  qty:number=1;
  

  constructor(private repository:ProductRepository) {}

  changePerPageView(number:number){
    console.log('triggered changerPerPageView');
    this.repository.itemsPerPage=+number;
    this.repository.pageIndex=0;
    this.repository.selectedPage=1;
    this.repository.setItemsPerPage();
  }
  
  get teas():Product[]{
    return this.repository.getProducts();
  }
  
  get itemsCount():number{
    return this.repository.getItemsCount();
  }
  
  
  get pageNumbers():number[]{
    this.totalPages=Array(Math.ceil(this.itemsCount/this.repository.itemsPerPage)).fill().map((x, i)=>i+1);
    console.log('begin indx', this.beginPgIdx, 'last page idx', this.lastPageIndex);
    console.log('total pages', this.totalPages.slice(this.beginPgIdx,this.lastPageIndex));
    return this.totalPages.slice(this.beginPgIdx,this.lastPageIndex);
  }
  
  get lastPageIndex():number{
    console.log('total length', this.totalPages.length);
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
    console.log('get next page items');
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
    console.log('PageNum', pageNum);
    this.repository.selectedPage=pageNum;
    this.getNextPageItems();
  }

  reduceQty(e:Event){
    this.qty--;
  }

  increaseQty(e:Event){
    this.qty++;
  }

  
  ngOnInit() {
    console.log('onInit');
    this.itemsPerPage=this.repository.itemsPerPage;
  }


}
