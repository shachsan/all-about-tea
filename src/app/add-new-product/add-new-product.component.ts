import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  addNewProductForm:FormGroup;
  itemCat:string[];
  // newProduct:Product={};

  constructor(private dataRepo:ProductRepository) { }

  ngOnInit() {
    this.addNewProductForm=new FormGroup({
      'name':new FormControl(null),
      'description':new FormControl(null),
      'category':new FormControl(null),
      'price':new FormControl(null),
      'priceType':new FormControl(null),
      'brand':new FormControl(null),
      'size':new FormControl(null),
      'sizeUnit':new FormControl(null),
      'imageUrl':new FormControl(null),
    });
    // this.itemCat=emitCategory
  }

  onSubmit(){
    console.log('form data', this.addNewProductForm.value);
    this.dataRepo.addProduct(this.addNewProductForm.value);
  }

  //below same method is defined in <left-side-bar> component(parent component, need to learn how to pass
  //parent method to child component)
  get itemCate():string[]{
    // console.log(this.dataRepo.getCategories());
    const allCat=this.dataRepo.getCategories();

    return [...new Set(allCat)]; // the set object creates a new array with unique elements
  }

}
