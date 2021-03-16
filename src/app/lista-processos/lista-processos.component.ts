import { Component, OnInit } from '@angular/core';
import { Processo } from './lista-processos.model';
import { ListaProcessosService } from './lista-processos.service';

@Component({
  selector: 'app-lista-processos',
  templateUrl: './lista-processos.component.html',
  styleUrls: ['./lista-processos.component.css']
})
export class ListaProcessosComponent implements OnInit {

  processos: Processo[];  

  constructor(private listaProcessosService : ListaProcessosService) { }

  ngOnInit() {
    this.consultaProcessos();
  }

  public consultaProcessos() {
    this.listaProcessosService.consultarEtapasProcesso();
    this.listaProcessosService.processos.subscribe(processos => {
        this.processos = processos;
        console.log(this.processos[0]);        
      });
  }
  

}
