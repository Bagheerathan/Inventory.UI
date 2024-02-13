import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { AddPrdouctComponent } from './components/add-prdouct/add-prdouct.component';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { OrderComponent } from './components/order/order.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';

const routes: Routes = [
  {
    path: "",
    component:ViewInventoryComponent
  },
  {
    path: "viewInventory",
    component:ViewInventoryComponent
  },
  {
    path: "addPurchase",
    component:AddPurchaseComponent
  },
  {
    path: "addOrder",
    component:OrderComponent
  },
  {
    path: "editProduct/:id",
    component:ModifyProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
