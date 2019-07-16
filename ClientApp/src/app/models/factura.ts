import { Cliente } from './cliente';
import { Compra } from './compra';

export class Factura {
    id:number; 
    //idCliente:number;
    fecha:string;
    compras:Compra[];
    cliente:Cliente;
    clienteId: number;
  
}
