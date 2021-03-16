import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Processo } from './lista-processos.model';

@Injectable({
  providedIn: 'root'
})
export class ListaProcessosService {

  private readonly restUrl = "http://localhost:3000";
  private readonly processos$: Subject<Processo[]> = new Subject<Processo[]>();

  constructor(private http: HttpClient) { }

  public consultarEtapasProcesso(): void {
    const url = `${this.restUrl}/processos`;
    let subscription: Subscription;
    subscription = this.http.get<Processo[]>(url).subscribe(processo => {
      this.processos$.next(processo);
      subscription.unsubscribe();
    });    
  }

  public get processos(): Observable<Processo[]> {
    return this.processos$;
  }

}
