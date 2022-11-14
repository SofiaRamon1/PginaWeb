import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navegacionc41(){
    this.router.navigate(['c1wb4'])
  }
  navegacionc42(){
    this.router.navigate(['Web4'])
  }
  navegacionc43(){
    this.router.navigate(['3cwb4'])
  }
}
