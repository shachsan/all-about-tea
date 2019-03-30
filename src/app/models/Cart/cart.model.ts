import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable()
export class Cart {
    public itemList:ItemList[]=[];
    public itemCount:number=0;
    public cartTotalPrice:number=0;

    addItemToCart(product:Product, qty:number=1){
        let item=this.itemList.find(item=>item.product===product);
    
        if(item!==undefined){
            let itemPrice=item.itemPrice;
            item.quantity+=qty;
            this.cartTotalPrice=this.cartTotalPrice-itemPrice+item.itemPrice;
        }else{
            this.itemList.push(new ItemList(product, qty));
            this.cartTotalPrice+=this.itemList[this.itemList.length-1].itemPrice;
            this.itemCount++;
        }

        // this.updateCartTotals();
    }

    // updateCartTotals(){
    //     this.itemCount=0;
    //     this.cartTotalPrice=0;

    // }
};

export class ItemList{
    constructor(public product:Product, public quantity:number) {}
    get itemPrice():number{
        return this.quantity*this.product.price;
    }
}
