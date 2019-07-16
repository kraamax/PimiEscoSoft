import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos:Producto[];
constructor(private productoService:ProductoService)
{ }
ngOnInit() {
  this.productoService.getAll().subscribe(productos=>this.productos=productos);
}
getAll(){

}

}
