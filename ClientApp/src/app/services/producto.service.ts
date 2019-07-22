import { Injectable, Inject } from '@angular/core';
import { Producto } from '../models/producto';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,private modalService: NgbModal) { }

  addProducto (producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl+'api/producto', producto, httpOptions).pipe(
    tap((newProducto: Producto) => this.log(`El producto id=${newProducto.id} fue añadido`)),
    catchError(this.handleError<Producto>('addProducto'))
    );
    }

    getAll():Observable<Producto[]>
{
return this.http.get<Producto[]>(this.baseUrl+'api/producto').pipe(
tap(_=>console.log('Se Consulta la información')),
catchError(this.handleError<Producto[]>('getAll',[]))
);
}
get(id: number): Observable<Producto>
{
const url = `${this.baseUrl + 'api/producto'}/${id}`;
return this.http.get<Producto>(url).pipe(
tap(_ => console.log(`fetched producto id=${id}`)),
catchError(this.handleError<Producto>(`Producto id=${id}`))
);
}
update (producto: Producto): Observable<any> {
  const url = `${this.baseUrl + 'api/producto'}/${producto.id}`;
  return this.http.put(url, producto, httpOptions).pipe(
  tap(_ => this.log(`El producto id=${producto.id} fue actualizado`)),
  catchError(this.handleError<any>('producto'))
  );
  }
  delete (producto: Producto | number): Observable<Producto> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url =  `${this.baseUrl + 'api/producto'}/${id}`;
    
    return this.http.delete<Producto>(url, httpOptions).pipe(
    tap(_ => this.log(`El producto id=${id} fue eliminado`)),
    catchError(this.handleError<Producto>('deleteProducto'))
    );
    }
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    var mesage =this.modalService.open(MensajeModalComponent);
mesage.componentInstance.titulo="ProductoService:";
mesage.componentInstance.body=` ${message}`;

}
}
