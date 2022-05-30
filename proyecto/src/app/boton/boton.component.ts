import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  mostrar:boolean | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrare(){
    this.mostrar = true;
  }
  noMostrare(){
    this.mostrar = false;
  }
}
