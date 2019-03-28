import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  itemsPerPage:number;
  totalPages:number[]=[];
  beginPageIndex:number=0;
  pageBtnsToDisplay:number=3;
  // lastPageIndex:number=this.lastPgIdx();
  // this.beginPageIndex+this.pageBtnsToDisplay;
  // selectedPage:number;
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
      // console.log('begin page index', this.beginPageIndex);
      // console.log('total pages', this.totalPages);
      return this.totalPages.slice(this.beginPageIndex,this.lastPageIndex);
    }
    getNextPageItems(){
      console.log('get next page items');
      this.repository.pageIndex=(this.repository.selectedPage-1)*this.repository.itemsPerPage;
      this.repository.setItemsPerPage();
    }

    showNextPageBtn(){
      console.log('selected page', this.repository.selectedPage, 'last page index', this.lastPageIndex);
      
      if(this.repository.selectedPage===this.lastPageIndex){
        
        this.beginPageIndex++;
        this.repository.selectedPage++;
        this.getNextPageItems();
        // this.updateLastPageIndex(this.beginPageIndex);
      }else{
        this.repository.selectedPage++;
        this.getNextPageItems();
      }
      // console.log('begin page index', this.beginPageIndex);
    }

    get lastPageIndex():number{
      // console.log('inside lastPgIdx');
      return this.beginPageIndex+this.pageBtnsToDisplay;
    }
    // updateLastPageIndex(beginIdx:number){
    //   this.lastPageIndex=
    // }

    get selectedPage():number{
      return this.repository.selectedPage;
    }
    
    setPageNum(pageNum:number){
      console.log('PageNum', pageNum);
      this.repository.selectedPage=pageNum;
      this.getNextPageItems();
      // this.selectedPage=pageNum;
    }
    

  get categories():string[]{
    return this.repository.getCategories();
  }

  get brands():string[]{
    return this.repository.getBrands();
  }

  ngOnInit() {
    this.itemsPerPage=this.repository.itemsPerPage;
    // this.selectedPage=this.repository.selectedPage;
  }

}
