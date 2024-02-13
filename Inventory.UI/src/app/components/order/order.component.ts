import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/model/Orders';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  addOrderRequest : Orders = {
    orderId: 0,
    orderDate: new Date (),
    numberShiped: 0,
    customerId: 0,
    productId: 0,
  }

  order : Orders [] = [];
  constructor(private inventoryService: InventoryServiceService,private router: Router) { }

  ngOnInit(): void {
    this.inventoryService.getAllorders()
    .subscribe({
      next : (order) =>{
       this.order = order
      },
      error:(response) => {
        console.log(response);
      }
    })
    
  }

  deleteOrder(id: number){
    this.inventoryService.deleteOrder(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['addOrder']);
        }
      })
  }

}
