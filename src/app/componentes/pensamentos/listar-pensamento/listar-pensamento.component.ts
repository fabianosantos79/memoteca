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

  constructor(private service: PensamentoService) {

  }

  ngOnInit(): void {
    this.service.listar().subscribe(listaDePensamentos => {
      this.listaDePensamentos = listaDePensamentos;
    });
  }

}
