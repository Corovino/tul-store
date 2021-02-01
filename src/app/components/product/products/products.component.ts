import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from '../../../shared/models/product.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  @Input() product: ProductInterface; 
  @Output() addCartProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

}
