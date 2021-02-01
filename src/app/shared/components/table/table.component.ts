import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../components/product/product.service';
import { ProductInterface } from '../../models/product.interface';

import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
 import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Producto', 'Id', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private productSvc: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
    this.productSvc.getAllProdutcs()
    .subscribe(product => (this.dataSource.data = product));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditProduct(product: ProductInterface) :void {
    console.log('Edit product', product); 
    this.openDialog(product);
  }

  onDeleteproduct(product: ProductInterface) :void {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        // this.productSvc.deleteproductById(product).then(() => {
        //   Swal.fire('Deleted!', 'Your  product has been deleted.', 'success');
        // }).catch((error) => {
        //   Swal.fire('Error!', 'There was an error deleting this product', 'error');
        // });
      }
    });

  }

  onNewproduct() {
    this.openDialog();
  }

  openDialog(product?: ProductInterface): void {
    const config = {
      data: {
        message: product ? 'Editar producto' : 'Crear Producto',
        content: product
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }
}