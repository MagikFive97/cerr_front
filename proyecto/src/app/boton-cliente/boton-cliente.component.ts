import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-cliente',
  templateUrl: './boton-cliente.component.html',
  styleUrls: ['./boton-cliente.component.scss']
})
export class BotonClienteComponent implements OnInit {
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
