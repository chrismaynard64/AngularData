import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


import { Hero, Villain } from 'src/app/core/model';
import { HeroService } from '../hero.service';
import { HeroType } from 'src/app/core/globals';
import { MatDialog } from '@angular/material/dialog';
import { HeroEditComponent } from '../hero-edit/hero-edit.component';
import { editType } from '../heroEditData';
import { HeroEdit2Component } from '../hero-edit2/hero-edit2.component';

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

  heroChangeSub: Subscription;

  heroes$: Observable<Hero[]>;
  villains$: Observable<Villain[]>;
  constructor(private heroService: HeroService, public dialog: MatDialog) {
    this.heroes$ = this.heroService.entities$.pipe(
      map(h => h.filter(n => n.type == HeroType.HERO_TYPE_HERO))
    );
    this.villains$ = this.heroService.entities$.pipe(
      map(h => h.filter(n => n.type == HeroType.HERO_TYPE_VILLAIN))
    );
}

  ngOnInit() {
     this.heroService.getAll();

     this.heroChangeSub = this.heroService.heroChange$.subscribe(h => {

      switch(h.type) {
        case editType.add:
            this.heroService.add(h.hero);
            break;
        case editType.edit:
            this.heroService.update(h.hero);
            break;
        case editType.delete:
            this.heroService.delete(h.hero.id);
            break;
      }
      
     })

  }

  ngOnDesctroy() {
    if (this.heroChangeSub)
    this.heroChangeSub.unsubscribe();
  }

  addNew(){
    let hero = new Hero();
    let dialogRef = this.dialog.open(HeroEditComponent, {
      height: '320px',
      width: '500px',
      data: {hero, heroChange: this.heroService.heroChange$, type: editType.add}
    });
  }  
  
  addNewR(){
    let hero = new Hero();
    let dialogRef = this.dialog.open(HeroEdit2Component, {
      height: '320px',
      width: '500px',
      data: {hero, heroChange: this.heroService.heroChange$, type: editType.add}
    });
  }

}
