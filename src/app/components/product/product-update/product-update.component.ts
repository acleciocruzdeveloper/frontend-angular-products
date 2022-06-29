import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: ProductModel = {
    name: '',
    price: 1.0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })

  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(["/products"]);
    })
  }

  cancelOperation(): void {
    this.router.navigate(["/products"]);
  }

}
