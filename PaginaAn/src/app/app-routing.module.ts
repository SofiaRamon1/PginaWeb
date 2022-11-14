import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';




const routes: Routes = [
  {
    path: '', component: Componente1Component
  },
  {
    path: 'c1wb2', component: Componente1Component
  },
  {
    path: 'c1wb3', component: Componente1Component
  },
  {
    path: 'c1wb4', component: Componente1Component
  },
  {
    path: 'Web2', component:Componente2Component
  },
  {
    path: 'Web3', component: Componente2Component
  },
  {
    path: 'Web4', component: Componente2Component
  },
  {
    path: '3cwb1', component:Componente3Component
  },
  {
    path: '3cwb2', component: Componente3Component
  },
  {
    path: '3cwb4', component: Componente3Component
  } ,
  {
    path: '4cwb1', component:Componente4Component
  },
  {
    path: '4cwb2', component: Componente4Component
  },
  {
    path: '4cwb3', component: Componente4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
