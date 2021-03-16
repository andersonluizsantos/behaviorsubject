import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Processo } from '../lista-processos/lista-processos.model';
import { ListaProcessosService } from '../lista-processos/lista-processos.service';

@Component({
  selector: 'app-resumo-processos',
  templateUrl: './resumo-processos.component.html',
  styleUrls: ['./resumo-processos.component.css']
})
export class ResumoProcessosComponent implements OnInit {

  primeiroProcesso: Processo;
  segundoProcesso: Observable<Processo>;

  constructor(private servico: ListaProcessosService) { }

  ngOnInit() {
    this.servico.processos.subscribe( (event:Processo[]) => {
      this.primeiroProcesso = event[0];
    });

  }

}
