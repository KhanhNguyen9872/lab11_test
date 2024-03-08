import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetail: Product | undefined
  constructor(private router:ActivatedRoute, private prod: ProductService){ }
  ngOnInit(): void {
	
      let id = parseInt(this.router.snapshot.params['id'])
      this.prod.getproductId(id).subscribe(data=>{
        this.productDetail = data
      })
      
      
  }
}
