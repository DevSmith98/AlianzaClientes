import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetClientsService {

  constructor(private http: HttpClient) { }

  getClients(body : any): Observable<any> {
    return this.http.post("http://localhost:8586/clientes/filtro", body);
  }

  creatClients(body: any): Observable<any> {
    return this.http.post("http://localhost:8586/clientes", body);
  }

  generarCsv(): Observable<any> {
    return this.http.get("http://localhost:8586/clientes/exportar");

}
}