import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FacturaService } from '../services/factura.service';
import { Cliente } from '../models/cliente';
import { Location } from '@angular/common';
import { Factura } from '../models/factura';

@Component({
  selector: 'app-facture-details-list',
  templateUrl: './facture-details-list.component.html',
  styleUrls: ['./facture-details-list.component.css']
})
export class FactureDetailsListComponent implements OnInit {

  cliente: Cliente;
  factura: Factura;
  
  constructor
    (
      private route: ActivatedRoute,
      private clienteService: ClienteService,
      private facturaService: FacturaService,

      private location: Location
    ) { }

  ngOnInit() {
    this.cliente = { id: null, nombres: '', apellidos: '', sexo: '', email: '', telefono: '', direccion: '' };
    this.factura= {id:null, cliente:this.cliente, clienteId:null, compras:null, fecha:""}
    this.get();
  
    console.log(JSON.stringify(this.factura)   ) ;
  }

  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('id');
    this.facturaService.get(id)
      .subscribe(factura => this.factura = factura
       );
  }
  

  goBack(): void {
    this.location.back();
  }


}
