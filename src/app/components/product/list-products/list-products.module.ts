import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products.component';
import { ListProductsRoutingModule } from './list-products-routing.module';
import { MaterialModule } from '../../material/material.module';
import { TableComponent } from '../../../shared/components/table/table.component'


@NgModule({
  declarations: [ListProductsComponent, TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ListProductsRoutingModule
  ]
})
export class ListProductsModule { }
