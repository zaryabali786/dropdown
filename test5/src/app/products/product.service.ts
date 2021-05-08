import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";
import {Category} from "./category"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproducts():Observable<Product>{
    const URL="http://localhost:3000/products";
    return this.http.get<Product>(URL);
  }
  getcategories():Observable<Category>{
    const URL="http://localhost:3000/countery";
    return this.http.get<Category>(URL);
  }
  allcategories(categoryId):Observable<Category>{
    const URL="http://localhost:2000/categories/"+categoryId;
    return this.http.get<Category>(URL);
  }
  searchcategory(categoryid):Observable<Product>{
    const URL="http://localhost:3000/products?categoryId="+categoryid;
    return this.http.get<Product>(URL);

  }
  addcategories(catbody):Observable<Category>{
    const URL="http://localhost:2000/categories";
    return this.http.post<Category>(URL,catbody);
  }
  updatecategories(  updateid,updatebody):Observable<Category>{
    const URL="http://localhost:2000/categories/"+updateid;
    return this.http.put<Category>(URL,updatebody);
  }
  deletecategories(categoryid):Observable<Category>{
    const URL="http://localhost:2000/categories/"+categoryid;
    return this.http.delete<Category>(URL);
  }
  createproduct(productBody):Observable<Product>{
    const URL="http://localhost:3000/products";
    return this.http.post<Product>(URL,productBody);

  }
  upateproduct(productId,productBody):Observable<Product>{
    const URL ="http://localhost:3000/products/"+productId;
    return this.http.put<Product>(URL,productBody);
  }
  viewallproduct(productId){
    const URL ="http://localhost:3000/products/"+productId;
 return this.http.get<Product>(URL);
  }
  
  deleteproduct(productId):Observable<Product>{
    const URL ="http://localhost:3000/products/"+productId;
    return this.http.delete<Product>(URL);
  }
}
