import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NgMaterialModule } from '../ngmaterial/ngmaterial.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroDisplayComponent } from './hero-display/hero-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroEdit2Component } from './hero-edit2/hero-edit2.component';



@NgModule({
  declarations: [HeroComponent, HeroListComponent, HeroEditComponent, HeroDisplayComponent, HeroEdit2Component],
  imports: [
    CommonModule, NgMaterialModule,  FormsModule, ReactiveFormsModule
  ],
  exports: [HeroComponent],
  entryComponents: [
    HeroEditComponent, HeroEdit2Component
  ],
})
export class HeroModule { }
