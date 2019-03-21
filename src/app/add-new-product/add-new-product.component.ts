import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StaticDataSource } from '../models/static.dataSouce';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  addNewProductForm:FormGroup;
  // newProduct:Product={};

  constructor(private dataSource:StaticDataSource){ }

  ngOnInit() {
    this.addNewProductForm=new FormGroup({
      'name':new FormControl(null),
      'desc':new FormControl(null),
      'category':new FormControl(null),
      'price':new FormControl(null),
      'priceType':new FormControl(null),
      'brand':new FormControl(null),
      'size':new FormControl(null),
      'sizeUnit':new FormControl(null),
      'imagePath':new FormControl(null),
    })
  }

  onSubmit(){
    console.log('form data', this.addNewProductForm.value);
    
    this.dataSource.addProduct(this.addNewProductForm.value);
    // this.newProduct={};
  }

}
