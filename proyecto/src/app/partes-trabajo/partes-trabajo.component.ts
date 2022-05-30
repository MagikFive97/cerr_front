import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partes-trabajo',
  templateUrl: './partes-trabajo.component.html',
  styleUrls: ['./partes-trabajo.component.scss']
})

export class PartesTrabajoComponent implements OnInit {
//almacenaremos el historial de respuestas de la sesion
  historicoImc: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
