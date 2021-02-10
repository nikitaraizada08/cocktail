import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alcoholic', component: DrinksComponent},
  {path: 'nonalcoholic', component: DrinksComponent},
  {path: 'search', component: DrinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
