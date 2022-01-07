import {Component, HostListener, ViewChild} from '@angular/core';
// import {MdbTableDirective} from 'PATH-TO-MDB-ANGULAR';
@Component({
  selector: 'app-product-pipe',
  templateUrl: './product-pipe.component.html',
  styleUrls: ['./product-pipe.component.css']
})
export class ProductPipeComponent  {

  inputSearch:string='';


  products=[
    {
    slno:1,
    image:"https://www.google.com/search?q=laptop+images&rlz=1C1FKPE_enIN949IN949&sxsrf=ALeKk03ImQp2MPU_EYD6y4xniUhxEqaNeg:1620814125132&tbm=isch&source=iu&ictx=1&fir=42EfKenmuguupM%252CVQ5PNyGFcG5K0M%252C_&vet=1&usg=AI4_-kQQ3ajAsJeNgWlxRzVI1ysR87SDaA&sa=X&ved=2ahUKEwieirOR88PwAhXUZCsKHXSmCQIQ9QF6BAgFEAE#imgrc=42EfKenmuguupM",
    name:"Laptop",
    price:" 60000"
  },
  {
    slno:2,
    image:"https://www.google.com/search?q=mobile+images&rlz=1C1FKPE_enIN949IN949&sxsrf=ALeKk037eSxJFDLPWY9_MoTT4fp27CJsfw:1620814259499&tbm=isch&source=iu&ictx=1&fir=rjDfHZk8wMkp2M%252C_VD92FxpQM8dLM%252C_&vet=1&usg=AI4_-kTRfHf6Ad9kzgBhFBkFJtg8oszTkg&sa=X&ved=2ahUKEwjorbzR88PwAhUZcCsKHRg1AAIQ9QF6BAgQEAE#imgrc=rjDfHZk8wMkp2M",
    name:"Mobile",
    price:"28000"
  },
  {
    slno:3,
    image:"https://www.google.com/search?q=shoes+images&rlz=1C1FKPE_enIN949IN949&sxsrf=ALeKk02UnRNFqCD_JbK6OePi_4pOwAn4hQ:1620814319726&tbm=isch&source=iu&ictx=1&fir=Iwyoy9nZu93owM%252C4XDdqCq2KU0-IM%252C_&vet=1&usg=AI4_-kQGdoH8avsrgjO6ZrdatYUQ7dSaMQ&sa=X&ved=2ahUKEwjd9Jfu88PwAhUMWX0KHYo8DQIQ9QF6BAgLEAE#imgrc=Iwyoy9nZu93owM",
    name:"Shoes",
    price:"3000"
  },
  {
    slno:4,
    image:"https://www.google.com/search?q=bags+images&rlz=1C1FKPE_enIN949IN949&sxsrf=ALeKk01e9x77G2PMY4ZH3fYs4VOsJccDWg:1620814344559&tbm=isch&source=iu&ictx=1&fir=wmWs8VLgsBWNYM%252CnlfuL9a9fRza2M%252C_&vet=1&usg=AI4_-kRnF2W0mkMgluY3YhIiOGERWXbG1w&sa=X&ved=2ahUKEwiS8YP688PwAhVObSsKHb81BgIQ9QF6BAgMEAE#imgrc=wmWs8VLgsBWNYM",
    name:"Bags",
    price:"600"
  },
  {
    slno:5,
    image:"https://www.google.com/search?q=books+images&rlz=1C1FKPE_enIN949IN949&sxsrf=ALeKk02-gfvBpPQyLNaW-yJvu1TEWDcccA:1620814277789&tbm=isch&source=iu&ictx=1&fir=BlUCjGvmpXjLRM%252CWpfJGyIp7epdTM%252C_&vet=1&usg=AI4_-kRF6xuI0iijhsdz7e0zjVg1rAo3eA&sa=X&ved=2ahUKEwjvmJPa88PwAhWSV30KHWrUAgIQ9QF6BAgQEAE#imgrc=BlUCjGvmpXjLRM",
    name:"Books",
    price:" 60"
  }
]
  constructor() { }

  ngOnInit(): void {
  }
}
