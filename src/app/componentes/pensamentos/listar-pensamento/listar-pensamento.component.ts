import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaDePensamentos: IPensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {

  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaDePensamentos => {
      this.listaDePensamentos = listaDePensamentos;
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
       this.listaDePensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaDePensamentos = listaPensamentos
    })
  }

}
