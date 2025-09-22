import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  image = "can-of-beans.jpg";
  name = "Can of Beans";
  description = "Full of magical moments, this can of beans could be yours!";
}
