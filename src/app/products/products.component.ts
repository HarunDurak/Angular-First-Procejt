import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data = data

  constructor() { }

  ngOnInit(): void {
  }

}
