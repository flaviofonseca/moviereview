import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.component.html',
  styleUrls: ['./filme-listagem.component.scss']
})
export class FilmeListagemComponent implements OnInit {

  provider = [];

  constructor(
    private router: ActivatedRoute,
    private filmeService: FilmeService
  ) {
  }

  ngOnInit() {
    this.consultarFilmes();
  }

  extrairParametros() {
    this.router.queryParams
      .subscribe(params => {
        console.log(`listagem id ${params.id}`);
      });

    if (this.router.queryParams) {

    }
  }

  consultarFilmes() {
    this.filmeService.consultarFilmes().subscribe(args => this.provider = args);
  }


}
