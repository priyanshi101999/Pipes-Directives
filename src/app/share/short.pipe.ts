import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(name: string, ): string{
 if(name.length > 3){
  return name.substring(0,3) + '...' ;
 }
 else{
  return name;

 }
 
  }

}
