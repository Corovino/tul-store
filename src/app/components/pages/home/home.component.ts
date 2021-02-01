import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductInterface } from '../../../shared/models/product.interface';
import { ProductService } from '../../product/product.service';
CartService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public products: ProductInterface[];
  constructor( private productSvc: ProductService, private _cartService:CartService) { }

  ngOnInit(): void {
     this.productSvc.getAllProdutcs()
     .subscribe( res =>{
           this.products = res
     } )
  }

  public addCartProduct( product : ProductInterface): void {
    this._cartService.changeCart(product);
  }

}
