import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
	productDetail: Product | undefined
	cartList: Cart[] = []
	InStock: number = 0
constructor(
    private router: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService) 
{ 
this.cartList = cartService.getCartAll() 
}
ngOnInit(): void { 
let id=this.router.snapshot.params['id']
 this.productService.getproductId(id).subscribe(data=>{
  this.productDetail =data
 })
this.InStock = this.productDetail?.inStock!
}
Add() {
  this.cartService.addCart(Number(this.productDetail?.id!), this.productDetail)
    this.InStock = this.cartService.getInStock(this.productDetail?.id!)!
    this.ngOnInit()
}
ItemCount() { return this.cartService.totalItems() }
ItemSum() { return this.cartService.Total() }
Remove(index: number) { 
  this.InStock=this.cartService.getInStock(this.productDetail?.id!)!
  this.cartService.RemoveCart(index) }
DeleteAll() { this.cartService.DeleteAllCart() }
}

