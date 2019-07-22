import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {
  constructor(private productoService: ProductoService) { }
  producto: Producto;
  ngOnInit() {
  this.producto = { id: null, nombre: '', precio:null, costo:null };
  }
  add() {
    if(this.producto.id==null|| this.producto.nombre==''|| this.producto.precio==null){

      alert('Rellene los campos')
    }else{
      console.log(JSON.stringify(this.producto));
      this.productoService.addProducto(this.producto)
  .subscribe();

    }
  
  }
}
