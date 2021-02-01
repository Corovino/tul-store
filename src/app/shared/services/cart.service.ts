import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../models/product.interface';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<ProductInterface>>(null); 
  public currentDataCart$ = this.cart.asObservable(); 
  public count: number = 1;

  constructor() { }

  public changeCart(newData: ProductInterface) {

    let listCart = this.cart.getValue();
    if(listCart){
        let objIndex = listCart.findIndex(obj => obj.id == newData.id);
        if(objIndex != -1){
          listCart[objIndex].quantity++
        }else{
          newData.quantity = 1;
          listCart.push(newData);
        }
    }
    
    if(!listCart){
        listCart = [];
        newData.quantity = 1;
        listCart.push(newData);
    }
    this.cart.next(listCart); 
  }
  public removeElementCart(newData:ProductInterface){
    let listCart = this.cart.getValue();
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if(objIndex != -1)
    {
      listCart[objIndex].quantity = 1;
      listCart.splice(objIndex,1);
    }
    this.cart.next(listCart); 
  }

}
