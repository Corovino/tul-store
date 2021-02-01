import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { AuthserviceService } from '../../services/authservice.service';
import { ProductInterface } from '../../models/product.interface';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  public appName : string = "TUL";
  public openCart:boolean = false;
  public products: Array<ProductInterface>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;


  constructor(public authSvc: AuthserviceService, private _cartService:CartService) { }

ngOnInit(): void {
    this._cartService.currentDataCart$.subscribe(productsCart=>{
      console.log("cero", productsCart);
      if(productsCart){
        this.products = [...productsCart];
        this.totalQuantity = productsCart.length;
        this.totalPrice = productsCart.reduce((sum : number, current: any) => {
          console.log("j",sum)
          console.log("h",current)
          console.log("i",productsCart)
          return sum + (+current.price * +current.quantity)
        }, 0);
        console.log("carrito", this.totalPrice );
      }
    })
}

removeProductCart( product: ProductInterface) : void {
  this._cartService.removeElementCart(product);
}

 onLogout() :void {
    this.authSvc.SignOut();
 }

 onCart() : void {
     this.openCart = !this.openCart; 
 }

}
