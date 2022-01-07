import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  constructor(public ds:DataService) { }

  price=[];
  ngOnInit(): void {
    this.price=this.ds.getprice();
  }

}
