import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(
    private snackBar: MatSnackBar,
    private httpCliente: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpCliente.post<ProductModel>(this.baseUrl, product)
  }

  read(): Observable<ProductModel[]> {
    return this.httpCliente.get<ProductModel[]>(this.baseUrl)
  }

  readById(id: string): Observable<ProductModel>{
    const url = `${this.baseUrl}/${id}`
    return this.httpCliente.get<ProductModel>(url)    
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpCliente.put<ProductModel>(url, product)
  }

}
