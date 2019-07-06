import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { of } from 'rxjs';

import { Hero } from '../core/model';



@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }

  getHeroes() {   
      return of([
        { id: 11, "name": "Mr. Nice", portrait: "01" },
        { id: 12, "name": "Narco", portrait: "02" },
        { id: 13, "name": "Bombasto", portrait: "03" }]);
  }
  
}