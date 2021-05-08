import { Component } from '@angular/core';
import{ProductService} from "./products/product.service";
import {Category} from "./products/category";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudwithjson';
  categorylist:Category;
  constructor(private service:ProductService ){

  }

  ngOnInit(): void {
  this.service.getcategories().subscribe(data=>{
    this.categorylist=data;
  })
  }

 


}
