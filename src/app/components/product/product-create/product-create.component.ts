import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: ProductModel = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Cadastro realizado com sucesso')
      this.router.navigate(["/products"])

    })
  }
  cancelOperation(): void {
    this.router.navigate(["/products"])
  }

}
