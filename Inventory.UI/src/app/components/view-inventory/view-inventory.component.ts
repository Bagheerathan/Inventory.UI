import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddPrdouctComponent } from '../add-prdouct/add-prdouct.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  products1: Product[] = [];
  
  constructor(private inventoryService: InventoryServiceService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.inventoryService.getAllProduct()
      .subscribe({
        next: (products) => {
          this.products1 = products;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }


  openAddProduct(): void {
    const dialogRef = this.dialog.open(AddPrdouctComponent, {});

    dialogRef.afterClosed().subscribe(result => {

      this.inventoryService.addProduct(result).subscribe({
        next:(out) => {
         this.router.navigate(['viewInventory']);
        },
        error: (response) => {
          console.log(response);
        }
      }); 
    })
  }
  
  
}