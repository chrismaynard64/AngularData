import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/core/model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

 @Input()  heroes$: Observable<Hero[]> = null;

  constructor() { }

  ngOnInit() {
  }


  

}
