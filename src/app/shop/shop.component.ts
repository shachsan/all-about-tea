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
  itemsPerPage:number;
  // pageIndex:number=0;
  selectedPage:number;
  // totalItems:number;

  // pageNumbers:Number=null;
  constructor(private repository:ProductRepository) {
    // this.totalItems=repository.getItemsCount();
   }

  changePerPageView(number:number){
    console.log('triggered changerPerPageView');
    this.repository.itemsPerPage=+number;
    this.repository.pageIndex=0;
    this.repository.selectedPage=1;
    this.repository.setItemsPerPage();
    // this.repository.setItemsPerPage(this.pageIndex, this.itemsPerPage)
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
      return Array(Math.ceil(this.itemsCount/this.repository.itemsPerPage)).fill().map((x, i)=>i+1);
    }
    
    setPageNum(pageNum:number){
      console.log('PageNum', pageNum);
      // this.selectedPage=pageNum;
      this.repository.selectedPage=pageNum;
      this.selectedPage=pageNum;
      // console.log('selectedPage', this.repository.selectedPage);
      this.repository.pageIndex=(this.repository.selectedPage-1)*this.repository.itemsPerPage;
      this.repository.setItemsPerPage();
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
    this.itemsPerPage=this.repository.itemsPerPage;
    this.selectedPage=this.repository.selectedPage;
    // console.log('run shop onInit')
    // this.selectedCatProducts=this.repository.getProducts();
    // this.selectedCatProductsCopy=this.selectedCatProducts;
  }

}
