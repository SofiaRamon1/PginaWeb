import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navegacionc21(){
    this.router.navigate(['c1wb2'])
  }
  navegacion23(){
    this.router.navigate(['3cwb2'])
  }
  navegacion24(){
    this.router.navigate(['4cwb2'])
  }
}
