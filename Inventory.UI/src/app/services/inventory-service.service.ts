import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { Orders } from '../model/Orders';
import { Supplier } from '../model/supplier';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  basApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.basApiUrl + "/api/Product");
  }

  getProduct(_productId: number): Observable<Product> {
    return this.http.get<Product>(this.basApiUrl + "/api/Product/" + _productId);
  }

  getAllorders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.basApiUrl + "/api/Orders");
  }

  getAllSuplier():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.basApiUrl + "/api/Supplier");
  }

  addProduct(addProductRequest: Product): Observable<Product>{
    return this.http.post<Product>(this.basApiUrl + "/api/Product",addProductRequest);
  }

  addPurchase(addPurchaseRequest: Purchase): Observable<Purchase>{
    return this.http.post<Purchase>(this.basApiUrl + "/api/Purchase",addPurchaseRequest);
  }

  addOrder(addOrderRequest: Orders): Observable<Orders>{
    return this.http.post<Orders>(this.basApiUrl + "/api/Orders",addOrderRequest);
  }

  deleteOrder(id:Number): Observable<Orders> {
    return this.http.delete<Orders>(this.basApiUrl + "/api/Orders/" + id);
  }

  modifyProduct(id: number, modifyProductRequest: Product): Observable<Product>{
    return this.http.put<Product>(this.basApiUrl + "/api/Product/" + id, modifyProductRequest);
  }

  deleteProduct(id:number): Observable<Product> {
    return this.http.delete<Product>
    (this.basApiUrl + "/api/Product/" + id);
  }
  
}
