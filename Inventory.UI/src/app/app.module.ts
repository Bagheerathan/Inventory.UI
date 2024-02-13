import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPrdouctComponent } from './components/add-prdouct/add-prdouct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { OrderComponent } from './components/order/order.component';
import { DeleteOderComponent } from './components/delete-oder/delete-oder.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewInventoryComponent,
    AddPrdouctComponent,
    AddPurchaseComponent,
    OrderComponent,
    DeleteOderComponent,
    ModifyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
