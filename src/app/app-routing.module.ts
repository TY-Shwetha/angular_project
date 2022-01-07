import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductNameComponent } from './product-name/product-name.component';
import { ProductPipeComponent } from './product-pipe/product-pipe.component';
import { ProductPriceComponent } from './product-price/product-price.component';

const routes: Routes = [
  {path:"productimage",component:ProductImageComponent},
  {path:"productname",component:ProductNameComponent},
  {path:"productprice",component:ProductPriceComponent},
  {path:"productpipe",component:ProductPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
