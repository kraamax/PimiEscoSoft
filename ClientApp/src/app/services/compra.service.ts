import { Injectable,Inject } from '@angular/core';
import { Compra } from '../models/compra';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  addCompra (compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.baseUrl+'api/compra', compra, httpOptions).pipe(
    tap((newCompra: Compra) => console.log(`added newCompra w/ id=${newCompra.id}`)),
    catchError(this.handleError<Compra>('addCompra'))
    );
    }

  getAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.baseUrl + 'api/compra').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Compra[]>('getAll', []))
    );
}
get(id: number): Observable<Compra>
{
const url = `${this.baseUrl + 'api/compra'}/${id}`;
return this.http.get<Compra>(url).pipe(
tap(_ => console.log(`fetched Compra id=${id}`)),
catchError(this.handleError<Compra>(`getHero id=${id}`))
);
}
update (compra: Compra): Observable<any> {
  const url = `${this.baseUrl + 'api/compra'}/${compra.id}`;
  return this.http.put(url, compra, httpOptions).pipe(
  tap(_ => this.log(`updated compra id=${compra.id}`)),
  catchError(this.handleError<any>('compra'))
  );
  }
  delete (compra: Compra | number): Observable<Compra> {
    const id = typeof compra === 'number' ? compra : compra.id;
    const url =  `${this.baseUrl + 'api/compra'}/${id}`;
    
    return this.http.delete<Compra>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Compra id=${id}`)),
    catchError(this.handleError<Compra>('deleteCompra'))
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
  alert(`CompraService: ${message}`);
}
}