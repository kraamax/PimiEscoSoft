import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../models/factura';
import { Compra } from '../models/compra';
import { CompraService } from '../services/compra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';


@Component({
  selector: 'app-facture-add',
  templateUrl: './facture-add.component.html',
  styleUrls: ['./facture-add.component.css']
})
export class FactureAddComponent implements OnInit {
id_compra:number;
  cliente: Cliente;
  compras: Compra[] = new Array();
  comprasConsulta: Compra[]= new Array() ;
  comprasFiltrado: Compra[]= new Array() ;
  productos: Producto[];
  factura: Factura;
  compra: Compra;
  compra2: Compra;
  producto: Producto;

  constructor(private clienteService: ClienteService, private productoService: ProductoService,private compraService:CompraService, private facturaService: FacturaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.cliente = { id: null, nombres: '', apellidos: '', sexo: '', email: '', telefono: '', direccion: '' };
    this.id_compra=1;
    this.producto = { id: null, nombre: '', precio: null,costo:null }

    this.factura=new Factura();
  
this.id_compra=0;
    this.getAll();
  }
  getAll() {
    this.productoService.getAll().subscribe(productos => this.productos = productos);
  }
  BuscarCliente() {
    var num1 = ((document.getElementById("identificacion") as HTMLInputElement).value);

    this.clienteService.get(parseInt(num1))
      .subscribe(cliente => this.cliente = cliente);

   

  }
  add() {
  

this.factura.fecha=new Date().getDate() + "/" + (new Date().getMonth() +1) + "/" + new Date().getFullYear();
this.factura.clienteId=this.cliente.id;
//this.factura.idCliente=this.cliente.id;
//this.cliente.id=0;

//this.factura.cliente=this.cliente;
this.factura.compras=this.compras;
if(this.factura.clienteId!=0){
  if(this.factura.compras.length>0 ){
    /*this.compras.forEach(element => {
      this.compraService.addCompra(element).subscribe();
    });*/
   console.log(JSON.stringify(this.factura));
    this.facturaService.addFactura(this.factura)
    .subscribe(task => {
      this.compras.length=0;
      this.comprasConsulta.length=0;
      this.id_compra=0;
     
      
    });
   
  
  }else{
    alert('Agregue una compra')
  }

}else{
  alert('Agregue un cliente')

}


   
  }
  addCompra() {
    if(isNaN(parseInt(((document.getElementById("cantidad") as HTMLInputElement).value))))
    {
      var mesage =this.modalService.open(MensajeModalComponent);
mesage.componentInstance.titulo="Atencion";
mesage.componentInstance.body="Rellene los campos";
    }else{
      this.compra = new Compra();
      this.compra2 = new Compra();
      //
  
  
      var num2 = ((document.getElementById("referencia") as HTMLInputElement).value);
      this.compra.productoId =parseInt(num2) ;
      this.compra2.producto=this.producto ;
      this.compra2.productoId=this.producto.id;
    this.compra2.precio=this.producto.precio;
     // this.producto.id=0;
      this.compra.precio=this.producto.precio;
  //this.compra.producto=this.producto;
  this.compra2.cantidad= parseInt(((document.getElementById("cantidad") as HTMLInputElement).value));
      this.compra.cantidad = parseInt(((document.getElementById("cantidad") as HTMLInputElement).value));
      this.compra.subtotal = this.compra.precio * this.compra.cantidad;
      this.compra2.subtotal = this.compra2.precio * this.compra2.cantidad;
      this.compra2.id=this.id_compra;
      
      // this.compraService.addCompra(this.compra).subscribe();
      this.compras.push(this.compra);
     // this.compra.producto=this.producto;
      this.comprasConsulta.push(this.compra2);
      this.id_compra=this.id_compra+1;
  
      console.log('se agrego');
  

    }
   

  }
  
  deleteCompra(id:number) {
var i;
  i=0;
  console.log(JSON.stringify(id));
  this.comprasConsulta.forEach(element => {
    if(element.id==id){
this.comprasConsulta.splice(i,1);
    }
    i++;
  });
     
   
    
    
    
  }
 /* obtenerCompras(){
    this.comprasFiltrado.length=0;
    this.compraService.getAll().subscribe(comprasConsulta => this.comprasConsulta = comprasConsulta);

    this.comprasConsulta.forEach(element =>  {
      if(element.idFactura==parseInt((document.getElementById("numeroFactura") as HTMLInputElement).value)){
       this.comprasFiltrado.push(element);

      }
      
    });

  }*/
  mostrar() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.productoService.get(parseInt(num1))
        .subscribe(producto => this.producto = producto);
    }
  }
}
