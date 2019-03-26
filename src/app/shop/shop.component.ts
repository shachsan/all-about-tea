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
  selectedCat=[];
  itemsPerPage:Number=2;
  // pageNumbers:Number=null;
  constructor(private repository:ProductRepository) { }

  changePerPageView(number:Number){
    this.itemsPerPage=number;
  }

  
  get teas():Product[]{
    return this.repository.getProducts();
  }


  get pageNumbers():Number{
    let itemscount=this.repository.getProducts().length;
    // console.log(itemscount);
    return Array(Math.ceil(itemscount/this.itemsPerPage)).fill().map((x, i)=>i+1);
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
  }

}
