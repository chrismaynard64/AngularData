import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { PageComponent } from './containers/page/page.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { HeroComponent } from './hero/hero/hero.component';

const routes: Routes = [
  { path: '',      component: HomeComponent, pathMatch: 'full' },
  { path: 'home',      component: HomeComponent, pathMatch: 'full' },
  { path: 'hero',      component: HeroComponent, pathMatch: 'full' },
  { path: '**',    component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
