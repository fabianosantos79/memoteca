import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  // nome= 'Fabiano'
  // idade = 44

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
