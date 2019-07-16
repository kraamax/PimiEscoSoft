import { Injectable,Inject } from '@angular/core';
import { Cliente } from '../models/cliente';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  addCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl+'api/cliente', cliente, httpOptions).pipe(
    tap((newCliente: Cliente) => console.log(`added newCliente w/ id=${newCliente.id}`)),
    catchError(this.handleError<Cliente>('addCliente'))
    );
    }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'api/cliente').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Cliente[]>('getAll', []))
    );
}
get(id: number): Observable<Cliente>
{
const url = `${this.baseUrl + 'api/cliente'}/${id}`;
return this.http.get<Cliente>(url).pipe(
tap(_ => console.log(`fetched cliente id=${id}`)),
catchError(this.handleError<Cliente>(`getHero id=${id}`))
);
}
update (cliente: Cliente): Observable<any> {
  const url = `${this.baseUrl + 'api/cliente'}/${cliente.id}`;
  return this.http.put(url, cliente, httpOptions).pipe(
  tap(_ => this.log(`updated cliente id=${cliente.id}`)),
  catchError(this.handleError<any>('cliente'))
  );
  }
  delete (cliente: Cliente | number): Observable<Cliente> {
    const id = typeof cliente === 'number' ? cliente : cliente.id;
    const url =  `${this.baseUrl + 'api/cliente'}/${id}`;
    
    return this.http.delete<Cliente>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted cliente id=${id}`)),
    catchError(this.handleError<Cliente>('deleteCliente'))
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
  alert(`clienteService: ${message}`);
}
}