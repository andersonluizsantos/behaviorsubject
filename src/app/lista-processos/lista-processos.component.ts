import { Processo } from './lista-processos.model';
import { Component, Input, OnInit } from '@angular/core';
import { ListaProcessosService } from './lista-processos.service';

@Component({
  selector: 'app-lista-processos',
  templateUrl: './lista-processos.component.html',
  styleUrls: ['./lista-processos.component.css']
})
export class ListaProcessosComponent implements OnInit {

  processos: Processo[];
  @Input() primeiroProcesso: Processo;

  constructor(private listaProcessosService : ListaProcessosService) { }

  ngOnInit() {
    this.consultaProcessos();
  }

  public consultaProcessos() {
    this.listaProcessosService.consultarEtapasProcesso()
      .subscribe(processos => {
        this.processos = processos;
        this.primeiroProcesso = this.processos[0];
        console.log(this.processos[0]);        
      });
  }

}
