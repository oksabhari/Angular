import {NgModule}  from '@angular/core'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import { ProductListComponent } from './products/products-list.compontent';
import { ConvertToSpacePipes } from './shared/convert-to-space';

@NgModule({
declarations:[AppComponent,ProductListComponent,ConvertToSpacePipes],
imports:[BrowserModule,FormsModule],
bootstrap:[AppComponent],
providers:[]
})

export class AppModule{

}