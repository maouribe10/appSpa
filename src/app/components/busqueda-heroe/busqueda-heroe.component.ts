import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.services';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {

  private heroesEncontrados: Heroe[];

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.getBusquedaHeroeFromService(params['termino']);
    })

  }

  ngOnInit() {
  }

  getBusquedaHeroeFromService( termino: string) {
    this.heroesEncontrados = this._heroesService.buscarHeroe(termino);
    console.log(`heroes encontra ${this.heroesEncontrados.length}`);
  }

}
