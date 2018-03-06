import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private idHeroe: number;
  private heroe: Heroe;
  private imgCasa = 'assets/img/';

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.idHeroe = params['id'];
      this.getHeroe();
    })
  }

  ngOnInit() {
    console.log(`onInit`);
  }

  getHeroe() {
    this.heroe = this._heroesService.getHeroe(this.idHeroe);
    this.imgCasa = (this.heroe.casa === 'DC') ? this.imgCasa = this.imgCasa + 'dc.png' : this.imgCasa = this.imgCasa + 'marvel.jpg';
    console.log(`info: ${this.heroe.nombre}`);

  }

}
