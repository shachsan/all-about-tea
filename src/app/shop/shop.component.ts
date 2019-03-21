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
  constructor(private repository:ProductRepository) { }

  get teas():Product[]{
    return this.repository.getProducts();
  }

  get categories():string[]{
    return this.repository.getCategories();
  }

  get brands():string[]{
    return this.repository.getBrands();
  }

  getCatProducts(cat):Product[]{
    this.selectedCat=this.repository.getCategoryProducts(cat);
  }

  ngOnInit() {
  }

}
