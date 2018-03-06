import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, private router: Router ) {
    console.log(`constructor Heroes`);
  }

  ngOnInit() {
    console.log(`onInit Heroes`);
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    console.log(`idx ${idx}`);
    this.router.navigate( ['/heroe', idx] );
  }

}
