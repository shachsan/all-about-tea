import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  selectedCat='';
  addTeaClicked=false;
  // @Output() emitCat=new EventEmitter<any>();

  constructor(private dataRepo:ProductRepository) { }

  get itemCate():string[]{
    // console.log(this.dataRepo.getCategories());
    const allCat=this.dataRepo.getCategories();

    return [...new Set(allCat)]; // the set object creates a new array with unique elements
  }

  // emitCategory(itemCate:string[]){
  //   this.emitCat.emit(itemCate)
  // }

  changeCat(cat:string){
    this.dataRepo.setProducts(cat);
    this.selectedCat=cat;
  }

  addProductHandler(){
    this.addTeaClicked=!this.addTeaClicked;
  }


  ngOnInit() {
  }

}
