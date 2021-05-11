import { Output, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    @Output() postCount
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
        return items.filter( it => {
            console.log(it)
            this.postCount = (it.tags.includes(searchText)).length
          return it.tags.includes(searchText);
        });
   } 
}