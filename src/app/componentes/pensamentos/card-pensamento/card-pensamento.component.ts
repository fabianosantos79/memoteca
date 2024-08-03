import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {
    id:0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraCardPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return "pensamento-g";
    }
    return "pensamento-p";
  }

}
