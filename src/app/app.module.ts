import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductNameComponent } from './product-name/product-name.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPipeComponent } from './product-pipe/product-pipe.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductNameComponent,
    ProductPriceComponent,
    ProductImageComponent,
    ProductPipeComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
