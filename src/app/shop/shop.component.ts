import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // allTeas: Product[]=[]
  // selectedCatProducts=[];
  // selectedCatProductsCopy=[];
  itemsPerPage:number=3;
  pageIndex:number=0;
  selectPage:number=1;
  // totalItems:number;

  // pageNumbers:Number=null;
  constructor(private repository:ProductRepository) {
    // this.totalItems=repository.getItemsCount();
   }

  changePerPageView(number:number){
    console.log('triggered changerPerPageView');
    this.itemsPerPage=+number;
    this.repository.setItemsPerPage(this.pageIndex, this.itemsPerPage)
    // this.teas.slice(this.pageIndex, this.itemsPerPage);
  }
  
  // get itemsCounts():number{
    //   return this.totalItems=this.repository.getItemsCount();
    // }
    
    
    get teas():Product[]{
      return this.repository.getProducts();
    }
    
    get itemsCount():number{
      return this.repository.getItemsCount();
    }
    
    
    get pageNumbers():number{
      // let itemscount=this.teas.length;
      // console.log('items count:',this.itemsCount, "items per page:", this.itemsPerPage);
      return Array(Math.ceil(this.itemsCount/this.itemsPerPage)).fill().map((x, i)=>i+1);
    }
    
    setPageNum(pageNum:number){
      console.log('PageNum', pageNum);
      this.selectPage=pageNum;
      this.pageIndex=(this.selectPage-1)*this.itemsPerPage;
      this.repository.setItemsPerPage(this.pageIndex, this.itemsPerPage)
    // this.selectedCatProducts=this.selectedCatProducts.slice(pageNum, this.itemsPerPage);
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  get brands():string[]{
    return this.repository.getBrands();
  }



  // getCatProducts(cat):Product[]{
  //   this.selectedCat=this.repository.getCategoryProducts(cat);
  // }

  ngOnInit() {
    // console.log('run shop onInit')
    // this.selectedCatProducts=this.repository.getProducts();
    // this.selectedCatProductsCopy=this.selectedCatProducts;
  }

}
