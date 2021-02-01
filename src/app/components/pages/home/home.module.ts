import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from '../../product/products/products.component';





@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
