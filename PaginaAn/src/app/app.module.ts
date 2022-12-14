import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente4Component } from './componente4/componente4.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component,
    Componente1Component,
    Componente4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
