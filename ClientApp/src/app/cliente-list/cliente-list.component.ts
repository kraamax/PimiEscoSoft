import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = new Array();
  constructor(private clienteService: ClienteService) { }
  
  ngOnInit() {
    this.getAll();
  }
  getAll() {

    this.clienteService.getAll().subscribe(clientes => this.clientes = clientes);
    console.log(JSON.stringify(this.clientes));
  }

}
