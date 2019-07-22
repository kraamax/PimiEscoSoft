import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  constructor(private clienteService: ClienteService, private modalService: NgbModal) { }
  cliente: Cliente;
  ngOnInit() {
    this.cliente = { id: null, nombres: '', apellidos: '', sexo: '', email: '', telefono: '', direccion: '' };
  }
  add() {
    if(this.cliente.nombres==''|| this.cliente.apellidos==''|| this.cliente.sexo==''|| this.cliente.email==''|| this.cliente.telefono==''|| this.cliente.direccion=='' || this.cliente.id==null){
var mesage =this.modalService.open(MensajeModalComponent);
mesage.componentInstance.titulo="Atencion";
mesage.componentInstance.body="Rellene los campos";



    }else{
      this.clienteService.addCliente(this.cliente)
      .subscribe(task => {
        alert('Se agrego una nueva tarea')
      });

    }
   
  }
}
