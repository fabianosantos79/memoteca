import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Fabiano',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
