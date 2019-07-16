import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto:Producto;
  stask:string;
  constructor
  (
  private route: ActivatedRoute,
  private productoService: ProductoService,
  private location: Location
  ) { }
  ngOnInit() {
  this.get();
  }
  
  get(): void {
  const id =
  +this.route.snapshot.paramMap.get('id');
  this.productoService.get(id)
  .subscribe(producto => this.producto = producto);
  }
  update(): void {
  this.productoService.update(this.producto)
  .subscribe(() => this.goBack());
  }
  delete(): void {
  this.productoService.delete(this.producto)
  .subscribe(() => this.goBack());
  }
  goBack(): void {
  this.location.back();
  }

}
