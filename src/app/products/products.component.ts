import { Component, Input } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
	@Input() productHome: Product[] =[]
}
