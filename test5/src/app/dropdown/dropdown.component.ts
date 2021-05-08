import { Component, OnInit } from '@angular/core';
import{ProductService} from"../products/product.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {
categorylist:any;
public searchText: any = '';

  constructor(private service:ProductService) { }
public select:boolean =false;
  ngOnInit(): void {
    this.service.getcategories().subscribe(data=>{
      this.categorylist=data;
    }
      
     )
  }
click(){
  this.select=!this.select;
}
cl(){
  this.select=false;
}
}
