import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Purchase } from 'src/app/model/purchase';
import { Supplier } from 'src/app/model/supplier';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  AddPurchaseRequest : Purchase = {
    purchaseId: 0,
    purchaseDate: new Date (),
    numReceived: 0,
    supplierId: 0,
    productId:  0
  }
  products : Product[] = [];
  supplier: Supplier[] = [];
  constructor(private inventoryServiceService: InventoryServiceService, private router: Router) { }

  ngOnInit(): void {
    this.inventoryServiceService.getAllProduct()
      .subscribe({
        next:(products) =>{
          this.products = products;
        },
        error:(response) => {
          console.log(response);
        }
      })

    this.inventoryServiceService.getAllSuplier()
    .subscribe({
      next:(supplier) =>{
        this.supplier = supplier;
      },
      error:(response) => {
        console.log(response);
      }
    })
  }

  addPurchase(){
    this.inventoryServiceService.addPurchase(this.AddPurchaseRequest)
    .subscribe({
      next:() => {
        this.router.navigate(['viewInventory']);
      }
    })
  }

}
