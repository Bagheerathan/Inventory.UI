import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';


@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  modifyProductRequest: Product = {
    productId: 0,
    productName: "",
    label: "",
    startInventory: 0,
    inventoryReceved: 0,
    inventoryOnHand: 0,
    minimumRequired: 0
  }

  constructor(private inventoryService: InventoryServiceService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const productId = params.get('id');

        if (productId) {
          const productIdAsNumber = +productId;
          this.inventoryService.getProduct(productIdAsNumber)
            .subscribe({
              next: (response) => {
                this.modifyProductRequest = response;
              }
            })
        }
      }
    })
  }

  updateProduct() {
    this.inventoryService.modifyProduct(this.modifyProductRequest.productId, this.modifyProductRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['viewInventory']);
        }
      })
  }

  deleteProduct(id: number) {
    this.inventoryService.deleteProduct(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['viewInventory']);
        }
      })
  }

}
