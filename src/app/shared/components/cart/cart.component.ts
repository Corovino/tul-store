import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../../models/product.interface'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  @Input() products: Array<ProductInterface>
  @Input() totalPrice : number = 0;
  @Input() totalQuantity : number = 0;
  @Output() removeProductCart = new EventEmitter()
 
  constructor() { }
  ngOnInit() {
    console.log("uno", this.totalPrice)
    console.log("dos", this.totalQuantity)
  }

}
