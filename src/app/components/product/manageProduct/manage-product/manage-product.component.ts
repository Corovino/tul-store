import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductInterface } from '../../../../shared/models/product.interface';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.sass']
})
export class ManageProductComponent implements OnInit {

  private image: any;
  private imageOriginal: any;
  @Input() product: ProductInterface;

  public ProductForm = new FormGroup({
    id: new FormControl('', Validators.required),
    tittle: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    tag: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  constructor( private productSvc: ProductService  ) { }

  ngOnInit() {
    this.image = this.product.image;
    this.imageOriginal = this.product.image;
    this.initValuesForm();
  }

  manageProduct(product: ProductInterface) : void {
    console.log("funciono", product);
    if (this.image === this.imageOriginal) {
      product.image = this.imageOriginal;
      this.productSvc.editProductById(product);
    } 
    if( this.image != this.imageOriginal ){
      this.productSvc.editProductById(product, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.ProductForm.patchValue({
      id: this.product.id,
      tittle: this.product.tittle,
      description: this.product.description,
      tag: this.product.tag,
      price: this.product.price
    });
  }

}
