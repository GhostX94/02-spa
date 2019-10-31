import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      this.heroe = this.heroesService.getHeroe(params['id']);
      // console.log('Im heroe' + this.heroe);

    });

   }
}
