import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBySearchTermPipe }  from './filter-by-search-term.pipe'
import{FirstDirectiveDirective} from './first-directive.directive'
import { ShortPipe} from './short.pipe'

@NgModule({
  declarations: [ FilterBySearchTermPipe,  ShortPipe, FirstDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [ShortPipe,
    FilterBySearchTermPipe,
    FirstDirectiveDirective
  ]
})
export class ShareModule { 
  

  
}
