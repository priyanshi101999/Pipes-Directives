import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterBySearchTerm'
})
export class FilterBySearchTermPipe implements PipeTransform {

  
    transform(items: any[], searchTerm: string): any[]{
      if (!items) return[];
        if (!searchTerm)
return items;

  
      searchTerm = searchTerm.toLowerCase();
  
      return items.filter(items => {
        return items.name.toLowerCase().includes(searchTerm);
      });
    }
  }

