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
  
  myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("numeroFactura");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
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
