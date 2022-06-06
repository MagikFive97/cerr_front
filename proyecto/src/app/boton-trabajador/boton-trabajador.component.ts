import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-trabajador',
  templateUrl: './boton-trabajador.component.html',
  styleUrls: ['./boton-trabajador.component.scss']
})
export class BotonTrabajadorComponent implements OnInit {

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
