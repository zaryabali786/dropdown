import { Component, OnInit,HostListener ,ElementRef,ViewChild } from '@angular/core';
import { Category } from '../products/category';
import{ProductService} from"../products/product.service";

@Component({
  selector: 'app-dropdown2',
  templateUrl: './dropdown2.component.html',
  styleUrls: ['./dropdown2.component.css'],
  
})

export class Dropdown2Component implements OnInit {
productList:any;
cat;
scroll1=0;
activeIndex = 0;
messages;
counter = 0;
searchFilter;
categoriesName;
//@HostListener("window:keydown",['$event'])
@ViewChild('scroll') scroll:ElementRef;

move(event: KeyboardEvent):void {


if (event.code == "ArrowUp" && this.activeIndex > 0  ) {
  this.activeIndex--;
  this.scroll1--;
this.scroll.nativeElement.scrollTop=  this.scroll1--*12.23+1;
;

 }
if (event.code == "ArrowDown" && this.activeIndex < this.categorylist.length-1 ) {
  this.activeIndex++;


  this.scroll1++;

  this.scroll.nativeElement.scrollTop= this.scroll1++*12;

  
}
  

if(event.code =='Enter'){
  this.select=false;
  this.selectedname=this.categorylist[this.activeIndex].name;

}

if(event.code =='Esc'){
  this.select=false;

}
if(event.code == 'W'){
  this.select=true;
alert('work');
}



//if(event.key === 'Enter'||event.key ==='enter'){


  //this.select=false;

//}



if(event.code == 'Escape'){
  this.select=false;
}



 
}
resetCounter() {
  this.counter = 0;
}
onSearch(cat){
  this.selectedname=cat.categoriesName;
  
}
selectedDay: string = '';
selectedname:any='';  
categorylist:Category;
  public searchText: any = '';
public toggle:boolean=false;
 public search:any='';
    constructor(private service:ProductService) { }
  public select:boolean =false;
    ngOnInit(): void {
      this.service.getcategories().subscribe(data=>{
        this.categorylist=data;
      }
        
       );
       this.service.getproducts().subscribe(data=>{
        console.log(data);
        this.productList=data;
          }
          )
    }

    searchText1(){
    console.log("work")
    }
    click(){
    this.select=!this.select;
    var xElement = document.getElementById("myTextField");
  
    if(xElement){
      alert(xElement);
      xElement.focus();
    }
}
  cl(){
    this.select=false;
  }
selected(event :any){
this.selectedDay=event.target.value;
this.selectedname=event.target.options[event.target.selectedIndex].text; 
}
values:string;
public keypressed;
onclick1(cat)
{
 
//   for (let myChild of this.categorylist) {
  //     myChild.BackgroundColour = "white";
   // }
 this.select=false;


this.selectedname=cat.name;
//console.log();
 // cat.BackgroundColour = "green";

 

}




}
