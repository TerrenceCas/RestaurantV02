import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;

  imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = this.product?.imageUrl ?? '';
  }
}
