import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { Router } from '@angular/router';

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
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

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

  listarFavoritos(){
    this.titulo = "Meus Favoritos";
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listarPensamentosFavoritos(this.paginaAtual, this.filtro).subscribe(listaPensamentosFavoritos => {
      this.listaDePensamentos = listaPensamentosFavoritos
    })
  }

  recarregarComponente(){
    this.paginaAtual = 1
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

  }

}
