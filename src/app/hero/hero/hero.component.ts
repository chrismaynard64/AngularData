import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


import { Hero, Villain } from 'src/app/core/model';
import { HeroService } from '../hero.service';
import { HeroType } from 'src/app/core/globals';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  selected: Hero;
  heroes: Hero[] = [];
  villains: Villain[] = [];
  loading: boolean;

  heroes$: Observable<Hero[]>;
  villains$: Observable<Villain[]>;
  constructor(private heroService: HeroService) {
    this.heroes$ = this.heroService.entities$.pipe(
      map(h => h.filter(n => n.type == HeroType.HERO_TYPE_HERO))
    );
    this.villains$ = this.heroService.entities$.pipe(
      map(h => h.filter(n => n.type == HeroType.HERO_TYPE_VILLAIN))
    );
}

  ngOnInit() {
     this.heroService.getAll();

  }

}
