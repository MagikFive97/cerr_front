import { Component, OnInit } from '@angular/core';
import { ParteTrabajo } from '../parte';

@Component({
  selector: 'app-principal-gerencia',
  templateUrl: './principal-gerencia.component.html',
  styleUrls: ['./principal-gerencia.component.scss']
})
export class PrincipalGerenciaComponent implements OnInit {
  rol: string | null | undefined ;
  partesTrabajoPadre : ParteTrabajo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

  addItem(newItem: ParteTrabajo) {
    this.partesTrabajoPadre.push(newItem);
  }
}
