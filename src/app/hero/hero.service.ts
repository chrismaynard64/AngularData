import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { of, BehaviorSubject, Subject } from 'rxjs';

import { Hero } from '../core/model';
import { HeroSaveData } from './heroEditData';



@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {

  _heroChange$: Subject<HeroSaveData> = new Subject<HeroSaveData>();

  get heroChange$() {
    return this._heroChange$;
  }



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