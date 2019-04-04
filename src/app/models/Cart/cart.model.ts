import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable()
export class Cart {
    public itemList:ItemList[]=[];
    public itemCount:number=0;
    public cartTotalPrice:number=0;

    addItemToCart(product:Product, qty:number=1){
        let item=this.findProduct(product);
    
        if(item!==undefined){
            let itemPrice=item.itemPrice;
            item.quantity+=qty;
            this.cartTotalPrice=this.cartTotalPrice-itemPrice+item.itemPrice;
        }else{
            this.itemList.push(new ItemList(product, qty));
            this.cartTotalPrice+=this.itemList[this.itemList.length-1].itemPrice;
            this.itemCount++;
            console.log('itemList', this.itemList);
        }

    }

    editQuanity(product:Product, editType:String){
        let item=this.findProduct(product);

        if(editType==='increase'){
            let itemPrice=item.itemPrice;
            item.quantity++;
            this.cartTotalPrice=this.cartTotalPrice-itemPrice+item.itemPrice;
        }else if(editType==='decrease'){
            let itemPrice=item.itemPrice;
            item.quantity--;
            this.cartTotalPrice=this.cartTotalPrice-itemPrice+item.itemPrice;
        }else if(editType==='delete'){
            let itemPrice=item.itemPrice;
            this.itemCount--;
            this.cartTotalPrice=this.cartTotalPrice-itemPrice;
            this.itemList.splice(this.itemList.indexOf(item),1)
        }
    }

    getCartItemQty(product:Product){
        let item=this.findProduct(product);
        if(item){
            return this.findProduct(product).quantity;
        }
    }

    findProduct(product:Product){
        return this.itemList.find(item=>item.product===product);
    }

};

export class ItemList{
    constructor(public product:Product, public quantity:number) {}
    get itemPrice():number{
        return this.quantity*this.product.price;
    }
}
