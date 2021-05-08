import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import {NgSelectModule  } from "@ng-select/ng-select";
import {SearchFilterPipe } from "./products/search-filter.pipe";
import { DropdownComponent } from './dropdown/dropdown.component';
import { Dropdown2Component } from './dropdown2/dropdown2.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { AppFocusDirective } from './app-focus.directive';
import { FocusedDirective } from './focused.directive'
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
  SearchFilterPipe,
    Dropdown2Component,
    ProductsearchPipe,
    AppFocusDirective,
    FocusedDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //SearchFilterPipe 
   // NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
