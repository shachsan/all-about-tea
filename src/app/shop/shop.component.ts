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
  selectedPage:number;
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
    
    
    get pageNumbers():number{
      return Array(Math.ceil(this.itemsCount/this.repository.itemsPerPage)).fill().map((x, i)=>i+1);
    }
    
    setPageNum(pageNum:number){
      console.log('PageNum', pageNum);
      this.repository.selectedPage=pageNum;
      this.selectedPage=pageNum;
      this.repository.pageIndex=(this.repository.selectedPage-1)*this.repository.itemsPerPage;
      this.repository.setItemsPerPage();
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  get brands():string[]{
    return this.repository.getBrands();
  }

  ngOnInit() {
    this.itemsPerPage=this.repository.itemsPerPage;
    this.selectedPage=this.repository.selectedPage;
  }

}
