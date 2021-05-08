import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import {Category} from "../products/category"
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(categorylist: any[], searchText: string,index:number): any[] {
    if(!categorylist) return [];
    
    if(!searchText) return categorylist;
searchText = searchText.toLowerCase();
return categorylist.filter( it => {
    
const categoriesName =  it.name.toLowerCase().includes(searchText) ;
  const id   = it.id.toString().includes(searchText);

  return (categoriesName + id); 

});


   }
   




}

