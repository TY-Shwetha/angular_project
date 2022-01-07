import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.css']
})
export class ProductNameComponent implements OnInit {

  constructor(public ds:DataService) { }

  productName=[];
  ngOnInit(): void {
    this.productName=this.ds.getProductName();
  }

}
