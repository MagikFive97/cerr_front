import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  Cliente : Cliente[] = [];
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
   this.rol  = localStorage.getItem('rol');
  }

  addItem(newItem: Cliente) {
    this.Cliente.push(newItem);
  }
  
  

}
