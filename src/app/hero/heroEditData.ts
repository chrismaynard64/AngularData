import { Hero } from '../core/model';
import { Subject } from 'rxjs';

export class  HeroEditData {
    hero: Hero;
    heroChange: Subject<HeroSaveData>;
    type: editType = editType.edit
 }
 

 export class  HeroSaveData {
    hero: Hero;
    type: editType = editType.edit
 }
 

 export enum editType {
     add = 1,
     edit = 2,
     delete = 3
    }