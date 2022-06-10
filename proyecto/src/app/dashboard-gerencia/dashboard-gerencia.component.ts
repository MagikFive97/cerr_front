import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-gerencia',
  templateUrl: './dashboard-gerencia.component.html',
  styleUrls: ['./dashboard-gerencia.component.scss']
})
export class DashboardGerenciaComponent implements OnInit {
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

}
