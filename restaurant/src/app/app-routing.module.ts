import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {CooperativeComponent} from "./pages/cooperative/cooperative.component";
import {AfishaComponent} from "./pages/afisha/afisha.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'cooperative', component: CooperativeComponent},
  {path: 'afisha', component: AfishaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
