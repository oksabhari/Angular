import {NgModule}  from '@angular/core'
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser'
import { ProductListComponent } from './products/products-list.compontent';

@NgModule({
declarations:[AppComponent,ProductListComponent],
imports:[BrowserModule],
bootstrap:[AppComponent],
providers:[]
})

export class AppModule{

}