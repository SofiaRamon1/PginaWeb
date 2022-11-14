import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navegacionc31(){
    this.router.navigate(['c1wb3'])
  }
  navegacionc32(){
    this.router.navigate(['Web3'])
  }
  navegacionc34(){
    this.router.navigate(['4cwb3'])
  }

}
