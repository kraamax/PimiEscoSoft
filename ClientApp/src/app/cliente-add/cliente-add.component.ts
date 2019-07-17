import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  cliente: Cliente;
  ngOnInit() {
    this.cliente = { id: null, nombres: '', apellidos: '', sexo: '', email: '', telefono: '', direccion: '' };
  }
  add() {
    if(this.cliente.nombres==''|| this.cliente.apellidos==''|| this.cliente.sexo==''|| this.cliente.email==''|| this.cliente.telefono==''|| this.cliente.direccion=='' || this.cliente.id==null){

      alert('Rellene los campos');
    }else{
      this.clienteService.addCliente(this.cliente)
      .subscribe(task => {
        alert('Se agrego una nueva tarea')
      });

    }
   
  }
}
