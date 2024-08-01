import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaDePensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular na Alura',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      id: '2',
      conteudo: 'Aprendendo Reac na Alura',
      autoria: 'Designer',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
