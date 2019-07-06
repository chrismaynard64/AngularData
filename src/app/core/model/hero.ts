import { HeroType } from '../globals';

export class Hero {
    id: number;
    name: string = '';
    portrait: string = '';
    type: HeroType;
}