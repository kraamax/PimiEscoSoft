import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FacturaService } from '../services/factura.service';
import { Cliente } from '../models/cliente';
import { Location, JsonPipe } from '@angular/common';
import { Factura } from '../models/factura';
import { CompraService } from '../services/compra.service';
import { Compras } from '../models/compras';

@Component({
  selector: 'app-facture-details-list',
  templateUrl: './facture-details-list.component.html',
  styleUrls: ['./facture-details-list.component.css']
})
export class FactureDetailsListComponent implements OnInit {

  cliente: Cliente;
  factura: Factura;
  isDone:boolean;
  
  constructor
    (
      private route: ActivatedRoute,
      private clienteService: ClienteService,
      private facturaService: FacturaService,
      private compraService: CompraService,

      private location: Location
    ) { }

  ngOnInit() {
    this.cliente = { id: null, nombres: '', apellidos: '', sexo: '', email: '', telefono: '', direccion: '' };
    this.factura= {id:null, cliente:this.cliente, clienteId:null, compras:null, fecha:""}
    this.get();
  this.isDone=false;
 
  }

  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('id');
    this.facturaService.get(id)
      .subscribe(factura => this.factura = factura
       );
  }
  
  delete(): void {
    console.log(JSON.stringify(this.factura));

    for (let entry of this.factura.compras) {
      this.compraService.delete(entry).subscribe(rest=> {
        this.factura.compras.length=this.factura.compras.length-1;
      });
  }
  if(this.factura.compras.length==0){
    this.facturaService.delete(this.factura.id)
    .subscribe(() => this.goBack());

  }
    
    }
  

  goBack(): void {
    this.location.back();
  }


}
