import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize }  from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductInterface } from '../../shared/models/product.interface';
import { FileI } from '../../shared/models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage) { 
      this.productsCollection = afs.collection<ProductInterface>('Products');
    }

  public getAllProdutcs(): Observable<ProductInterface[]> {
    return this.productsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ProductInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      )
  }

  public getOneproduct(id: ProductInterface): Observable<ProductInterface> {
    return this.afs.doc<ProductInterface>(`Products/${id}`).valueChanges()
  }

  public deleteproductById(product: ProductInterface) {
    return this.productsCollection.doc(product.id).delete();
  }

  public editProductById(product: ProductInterface, newImage?: FileI) {
    
    if (newImage) {
      this.uploadImage(product, newImage);
    } 
    if( !newImage){
      return this.productsCollection.doc(product.id).update(product);
    }
  }

  public preAddAndUpdateproduct(product: ProductInterface, image: FileI): void {
    this.uploadImage(product, image);
  }

  private saveproduct(product: ProductInterface) {

    const productObj = {
      tittle: product.tittle,
      description: product.description,
      image: this.downloadURL,
      fileRefProduct: this.filePath,
      tag: product.tag
    };

    if(product.id) {
      return this.productsCollection.doc(product.id).update(productObj);
    } else {
      return this.productsCollection.add(productObj);
    }

  }

  private uploadImage(product: ProductInterface, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.saveproduct(product);
          });
        })
      ).subscribe();
  }
  

}
