import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../models/factura';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  facturas:Factura[]= new Array();
  newsfacturas:Factura[]= new Array();
  cliente:Cliente;

  constructor(private clienteService:ClienteService, private facturaService:FacturaService) { }

  ngOnInit() {
    this.ObtenerFacturas();
  }
  ObtenerFacturas(){
    this.facturaService.getAll().subscribe(facturas=>this.facturas=facturas);
  }
  obtenerCliente(id:number){
    this.clienteService.get(id) .subscribe(cliente => this.cliente = cliente);
  }
 /* obtenerClienteFactura(){
    this.ObtenerFacturas();
    this.facturas.forEach(element => {
      this.obtenerCliente(element.idCliente);
    element.cliente=this.cliente;

      this.newsfacturas.push(element);
      
    });
  }*/

}
