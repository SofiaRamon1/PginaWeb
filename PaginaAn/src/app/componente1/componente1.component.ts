import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navegacionc2(){
    this.router.navigate(['Web2'])
  }
  navegacionc3(){
    this.router.navigate(['3cwb1'])
  }
  navegacionc4(){
    this.router.navigate(['4cwb1'])
  }

}
