import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NgMaterialModule } from '../ngmaterial/ngmaterial.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroDisplayComponent } from './hero-display/hero-display.component';



@NgModule({
  declarations: [HeroComponent, HeroListComponent, HeroEditComponent, HeroDisplayComponent],
  imports: [
    CommonModule, NgMaterialModule
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
