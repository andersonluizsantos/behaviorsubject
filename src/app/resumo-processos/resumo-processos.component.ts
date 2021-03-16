import { Component, Input, OnInit } from '@angular/core';
import { Processo } from '../lista-processos/lista-processos.model';

@Component({
  selector: 'app-resumo-processos',
  templateUrl: './resumo-processos.component.html',
  styleUrls: ['./resumo-processos.component.css']
})
export class ResumoProcessosComponent implements OnInit {

  primeiroProcesso: Processo;
  
  constructor() { }

  ngOnInit() {
  }

  obterPrimeiroProcesso(event: Processo){
    this.primeiroProcesso = event;
  }

}
