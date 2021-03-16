import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Processo } from './lista-processos.model';

@Injectable({
  providedIn: 'root'
})
export class ListaProcessosService {

  private readonly restUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public consultarEtapasProcesso(): Observable<Processo[]> {
    const url = `${this.restUrl}/processos`;
    return this.http.get<Processo[]>(url);
  }

}
