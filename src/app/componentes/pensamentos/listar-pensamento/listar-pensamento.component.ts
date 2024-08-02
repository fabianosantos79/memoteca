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
      conteudo: 'Aprendendo React na Alura',
      autoria: 'Designer',
      modelo: 'modelo3'
    }
    ,
    {
      id: '3',
      conteudo: 'Aprendendo Vue JS na Alura',
      autoria: 'Tester',
      modelo: 'modelo2'
    },
    {
      id: '4',
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      autoria: "Fabiano",
      modelo: 'modelo2'
    },
    {
      id: '5',
      conteudo: 'Aprendendo Bootstrap na Alura aprendendo Bootstrap na Alura aprendendo Bootstrap na Alura aprendendo Bootstrap na Alura',
      autoria: 'Designer',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
