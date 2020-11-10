import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReseniasContactoComponent } from './resenias-contacto/resenias-contacto.component';
import { ReseniasHomeComponent } from './resenias-home/resenias-home.component';

const routes: Routes = [
{
  path:'', redirectTo: 'home', pathMatch: 'full'
},
{
  path:'home', component: ReseniasHomeComponent
},
{
  path:'contacto', component: ReseniasContactoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
