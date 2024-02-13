import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';

@Component({
  selector: 'app-add-prdouct',
  templateUrl: './add-prdouct.component.html',
  styleUrls: ['./add-prdouct.component.css'],
})
export class AddPrdouctComponent implements OnInit {

  addProductRequest : Product = {
    productId: 0,
    productName: "",
    label: "",
    startInventory: 0,
    inventoryReceved: 0,
    inventoryOnHand: 0,
    minimumRequired: 0
  }

  constructor(private inventoryService: InventoryServiceService,public dialogRef: MatDialogRef<AddPrdouctComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void{

    this.dialogRef.close(
      this.addProductRequest
    );
  }


}
