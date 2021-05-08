import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(productList: any[], search: string): any[] {
    if(!productList) return [];
    
    if(!search) return productList;
search = search.toLowerCase();
return productList.filter( it => {
    
      return it.name.toLowerCase().includes(search);
    });


   }
   

}
