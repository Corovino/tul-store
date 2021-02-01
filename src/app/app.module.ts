import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { ApproutingRoutingModule } from './approuting-routing.module';
import { MaterialModule } from './components/material/material.module';
import { ContainerComponent } from './components/pages/container/container.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ManageProductComponent } from './components/product/manageProduct/manage-product/manage-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './shared/components/cart/cart.component';;


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ModalComponent,
    ContainerComponent,
    ManageProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    ApproutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
