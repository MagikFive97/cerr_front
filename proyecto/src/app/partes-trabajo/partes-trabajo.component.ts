import { Component, OnInit } from '@angular/core';
import { ParteTrabajo } from '../parte';

@Component({
  selector: 'app-partes-trabajo',
  templateUrl: './partes-trabajo.component.html',
  styleUrls: ['./partes-trabajo.component.scss']
})

export class PartesTrabajoComponent implements OnInit {
  partesTrabajoPadre : ParteTrabajo[] = [];
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

  addItem(newItem: ParteTrabajo) {
    this.partesTrabajoPadre.push(newItem);
  }
  
}
