import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/api/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent  implements  OnInit{


  constructor(
   private service : ProductService

  ) {







  }

products: any[] = []

  ngOnInit() {


     this.service.getAllProductsWithLimits().subscribe({
      next:(data: any)=>{
        console.log("data",data)
        this.products = data
      }
    })


  }

}
