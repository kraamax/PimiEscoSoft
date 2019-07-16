import { Injectable,Inject } from '@angular/core';
import { Factura } from '../models/factura';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  addFactura (factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.baseUrl+'api/factura', factura, httpOptions).pipe(
    tap((newFactura: Factura) => console.log(`added newFactura w/ id=${newFactura.id}`)),
    catchError(this.handleError<Factura>('addFactura'))
    );
    }

  getAll(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.baseUrl + 'api/factura').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Factura[]>('getAll', []))
    );
}
get(id: number): Observable<Factura>
{
const url = `${this.baseUrl + 'api/factura'}/${id}`;
return this.http.get<Factura>(url).pipe(
tap(_ => console.log(`fetched factura id=${id}`)),
catchError(this.handleError<Factura>(`getHero id=${id}`))
);
}
update (factura: Factura): Observable<any> {
  const url = `${this.baseUrl + 'api/factura'}/${factura.id}`;
  return this.http.put(url, factura, httpOptions).pipe(
  tap(_ => this.log(`updated factura id=${factura.id}`)),
  catchError(this.handleError<any>('factura'))
  );
  }
  delete (factura: Factura | number): Observable<Factura> {
    const id = typeof factura === 'number' ? factura : factura.id;
    const url =  `${this.baseUrl + 'api/factura'}/${id}`;
    
    return this.http.delete<Factura>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted factura id=${id}`)),
    catchError(this.handleError<Factura>('deleteFactura'))
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
