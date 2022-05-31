import { Component, OnInit , Input } from '@angular/core';
import {ParteTrabajo} from '../parte';
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  mostrar:boolean | undefined;
  mostrarRelleno:boolean | undefined;
  @Input() parteTrabajoBoton: ParteTrabajo[]= [];
  parte : ParteTrabajo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  mostrare(){
    this.mostrar = true;
  }
  noMostrare(){
    this.mostrar = false;
  }

  
  mostrareRelleno(){
    this.mostrarRelleno = true;
    console.log(this.parte);
  }
  noMostrareRelleno(){
    this.mostrarRelleno = false;
  }
}
