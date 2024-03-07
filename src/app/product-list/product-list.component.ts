import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Product[] = []
  showRating(event: any) {
    alert(`${event}`)
  }
  formProduct = new FormGroup({
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>('')
  })
  file: string = ''
  IsAdd: number = 1
  IsUpdate: number = 0
  constructor(private prod: ProductService) {
    this.prod.getProduct().subscribe(data => {
      this.productList = data
    })
  }
  ngOnInit(): void {
    this.formProduct.controls['imageUrl'].setValue('./assets/images')
    this.prod.getProduct().subscribe(data => {
      this.productList = data
    })
  }
  onChange(event: any) {
    var str = event.target.files[0].name;
    this.file = './assets/images/' + str
  }
  id: any
  Add() {
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.AddProduct(this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
    console.log(this.formProduct);
    
  }
  Edit(index: number) {
    this.id = Number(this.productList[index].id)
    
    this.formProduct.controls['productName'].setValue(this.productList[index].productName)
    this.formProduct.controls['productCode'].setValue(this.productList[index].productCode)
    this.formProduct.controls['releaseDate'].setValue(this.productList[index].releaseDate)
    this.formProduct.controls['price'].setValue(this.productList[index].price)
    this.formProduct.controls['description'].setValue(this.productList[index].description)
    this.formProduct.controls['imageUrl'].setValue(this.productList[index].imageUrl)

    this.file = this.productList[index].imageUrl
  }
  Update() {
    this.prod.UpdateProduct(this.id, this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  Delete(index: number) {
    this.id = this.productList[index].id
    this.prod.DeleteProduct(this.id).subscribe(res => {
      this.ngOnInit()
    })
  }
}
