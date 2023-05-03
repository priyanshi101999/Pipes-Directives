import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from './share/share.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TableComponent } from './table/table.component';
 import { ShortPipe } from './share/short.pipe';
 import { FilterBySearchTermPipe } from './share/filter-by-search-term.pipe';
import { FormsModule } from '@angular/forms';

import { FirstDirectiveDirective } from './share/first-directive.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TableComponent,
    //  ShortPipe,
    //  FilterBySearchTermPipe,
    //  FirstDirectiveDirective
  ],
  imports: [ 
    ShareModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    
  
  ],
  exports: [ AppComponent,
    EmployeesComponent,
    TableComponent,
     ShortPipe,
     FilterBySearchTermPipe,
     FirstDirectiveDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
