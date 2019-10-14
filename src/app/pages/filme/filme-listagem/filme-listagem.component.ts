import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.component.html',
  styleUrls: ['./filme-listagem.component.scss']
})
export class FilmeListagemComponent implements OnInit {

  provider = [];

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.consultarFilmes();
  }

  consultarFilmes() {
    this.filmeService.consultarFilmes().subscribe(args => this.provider = args);
  }

  editar(item) {

  }

}
