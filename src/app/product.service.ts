import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  products: Product[] =[]
  AutoId(){
    var max=1
    this.products.forEach(item=>{
      if(item.id>max)
      max = item.id
    })
    return max+1
  }
  private URL=`http://localhost:3000/products`
  getProduct():Observable <Product[]>{
    return this.http.get<Product[]>(`${this.URL}`)
  }
  getproductId(id:number){
    return this.http.get<Product>(`${this.URL}/${id}`)
  }
  AddProduct(frmProduct:any) :Observable <Product[]>{
    return this.http.post<Product[]>(`${this.URL}`,frmProduct)
  }
  EditProduct(index:number){
    return this.products[index]
  }
  UpdateProduct(id:number,frmProduct:any) :Observable<Product[]>{
    return this.http.put<Product[]>(`${this.URL}/${id}`,frmProduct)
  }
  DeleteProduct(id:number){
    return this.http.delete<Product[]>(`${this.URL}/${id}`)
  }
}
