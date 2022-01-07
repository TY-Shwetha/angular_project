import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  getprice(){

    const price=[
     {soapId:1,price:36},
     {perfumeId:2,price:160},
     {booksId:3,price:55},
     {penId:4,price:30},
    ];

    return price;
  }

  getProductName(){
const productName=[
    {id:1,productName:'soap'} , 
    {id:2,productName:'Perfume'},
    {id:3,productName:'Towel'},
    {id:4,productName:'Books'},
    {id:5,productName:'Pen'},
    {id:6,productName:'Laptop'}
  ]

  return productName;
}
}
