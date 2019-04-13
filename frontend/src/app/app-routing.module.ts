import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomewearComponent } from './homewear/homewear.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'women', component: WomenComponent},
  { path: 'men', component: MenComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'homewear', component: HomewearComponent},
  { path: 'new-arrivals', component: NewArrivalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
