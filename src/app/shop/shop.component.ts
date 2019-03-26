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
  itemsPerPage:number=3;

  // pageNumbers:Number=null;
  constructor(private repository:ProductRepository) { }

  changePerPageView(number:number){
    this.itemsPerPage=number;
  }

  
  get teas():Product[]{
    return this.repository.getProducts();
    // return this.selectedCatProducts;
  }


  get pageNumbers():number{
    let itemscount=this.repository.getProducts().length;
    // console.log(itemscount);
    return Array(Math.ceil(itemscount/this.itemsPerPage)).fill().map((x, i)=>i+1);
  }

  setPageNum(pageNum:number){
    console.log(pageNum);
    

    this.selectedCatProducts=this.selectedCatProducts.slice(pageNum, this.itemsPerPage);
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
    console.log('run shop onInit')
    // this.selectedCatProducts=this.repository.getProducts();
  }

}
