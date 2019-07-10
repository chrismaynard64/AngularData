import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/core/model';
import { MatDialog } from '@angular/material/dialog';
import { HeroEditComponent } from '../hero-edit/hero-edit.component';
import { HeroService } from '../hero.service';
import { editType } from '../heroEditData';
import { HeroEdit2Component } from '../hero-edit2/hero-edit2.component';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

 @Input()  heroes$: Observable<Hero[]> = null;

  constructor(public dialog: MatDialog, private heroService: HeroService) { }

  ngOnInit() {
  }

  selected(hero) {
    let dialogRef = this.dialog.open(HeroEditComponent, {
      height: '500px', //height: '320px',
      width: '500px',
      data: {hero, heroChange: this.heroService.heroChange$, type: editType.add}
    });
  }

  selected2(hero) {
    let dialogRef = this.dialog.open(HeroEdit2Component, {
      height: '500px', //height: '320px',
      width: '500px',
      data: {hero, heroChange: this.heroService.heroChange$, type: editType.add}
    });
  }

  

}
