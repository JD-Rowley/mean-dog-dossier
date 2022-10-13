import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreedComponent } from './breed/breed.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'breed/:id', component: BreedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
