import { Component, OnInit , Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup , FormControl} from '@angular/forms';
import { Empleado } from '../employee';
@Component({
  selector: 'app-modal-crear-trabajador',
  templateUrl: './modal-crear-trabajador.component.html',
  styleUrls: ['./modal-crear-trabajador.component.scss']
})
export class ModalCrearTrabajadorComponent implements OnInit {

  @Input() muestro: boolean | undefined;
  historico: Empleado[] = [];
  EmpleadoForm: FormGroup;
  datos : any;
  constructor(public http: HttpClient) {
    this.EmpleadoForm  = new FormGroup({
      Nombre: new FormControl(''),
      Email: new FormControl(''),
      Seguridad_Social: new FormControl(''),
      Telefono:new FormControl(''),
      Direccion: new FormControl(''),
      Categoria : new FormControl(''),
      Cotizacion: new FormControl(''),
      Antiguedad: new FormControl(''),
      Cod_Contrato: new FormControl(''),
      Precio_Horas: new FormControl(''),
      Observaciones: new FormControl(''),
      Dni: new FormControl(''),
    })}

  ngOnInit(): void {

  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Nombre: this.EmpleadoForm.value['Nombre'],
      Email: this.EmpleadoForm.value['Email'],
      Seguridad_Social: this.EmpleadoForm.value['Seguridad_Social'],
      Telefono: this.EmpleadoForm.value['Telefono'],
      Direccion: this.EmpleadoForm.value['Direccion'],
      Categoria: this.EmpleadoForm.value['Categoria'],
      Cotizacion: this.EmpleadoForm.value['Cotizacion'],
      Antiguedad: this.EmpleadoForm.value['Antiguedad'],
      Cod_Contrato: this.EmpleadoForm.value['Cod_Contrato'],
      Precio_Horas: this.EmpleadoForm.value['Precio_Horas'],
      Observaciones: this.EmpleadoForm.value['Observaciones'],
      Dni: this.EmpleadoForm.value['Dni'],
      id: this.EmpleadoForm.value['id'],
    });

    this.http.post('http://localhost:8000/api/gerencia/trabajadores/',{
      Nombre: this.historico[0].Nombre,
      Email : this.historico[0].Email,
      Seguridad_Social : this.historico[0].Seguridad_Social,
      Telefono: this.historico[0].Telefono,
      Direccion: this.historico[0].Direccion,
      Categoria: this.historico[0].Categoria,
      Cotizacion: this.historico[0].Cotizacion,
      Antiguedad: this.historico[0].Antiguedad,
      Cod_Contrato: this.historico[0].Cod_Contrato,
      Precio_Horas: this.historico[0].Precio_Horas,
      Observaciones: this.historico[0].Observaciones,
      Dni: this.historico[0].Dni
    }, { headers : { 'content-type': 'application/json'}}).subscribe((res : any) =>{
      this.datos = res;
      console.log(this.datos);
      // console.log(this.historico);
    })
    // console.log(this.historico[0].Telefono);
}

clear(): void {
  this.EmpleadoForm.reset();

}

nomostrar(){
  this.muestro = false;
}

}
