import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searching: string='';
  
  filterProductList:Product[]=[]
  products: Product[]=[]
  productService : ProductService = inject(ProductService)
  constructor(){
   this.productService.getProduct().subscribe(data =>{
      this.products =data
      this.filterProductList=this.products;
    })
   
  }
  
  filterResults(){
    if(!this.searching){
      this.filterProductList=this.products;
    }
    this.filterProductList=this.products.filter(
      list => 
        list?.productName.toLowerCase().includes(this.searching.toLowerCase())
      
    )
    
  }
}
