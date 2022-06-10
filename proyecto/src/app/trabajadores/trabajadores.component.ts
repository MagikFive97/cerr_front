import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.scss']
})
export class TrabajadoresComponent implements OnInit {
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

}
