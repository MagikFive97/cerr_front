import { Component, OnInit , Input } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import {ParteTrabajo} from '../parte';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-crear-parte',
  templateUrl: './modal-crear-parte.component.html',
  styleUrls: ['./modal-crear-parte.component.scss']
})
export class ModalCrearParteComponent implements OnInit {
  @Input() muestro: boolean | undefined;
  historico: ParteTrabajo[] = [];
  ParteForm: FormGroup;
  datos : any;

  constructor(public http: HttpClient) {
    this.ParteForm  = new FormGroup({
      Cliente: new FormControl(''),
      Fecha: new FormControl(''),
      Horas_Totales: new FormControl(''),
      Horas_Montaje: new FormControl(''),
      Descripcion: new FormControl(''),
      Materiales: new FormControl(''),
      Observaciones: new FormControl(''),

    })}

  ngOnInit(): void {
  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Cliente: this.ParteForm.value['Cliente'],
      Fecha: this.ParteForm.value['Fecha'],
      Horas_Totales: this.ParteForm.value['Horas_Totales'],
      Horas_Montaje: this.ParteForm.value['Horas_Montaje'],
      Descripcion: this.ParteForm.value['Descripcion'],
      Materiales: this.ParteForm.value['Materiales'],
      Observaciones: this.ParteForm.value['Observaciones'],
      Firma_trabajador: this.ParteForm.value['Firma_trabajador'],
      Firma_cliente: this.ParteForm.value['Firma_cliente'],
      id:this.ParteForm.value['id'],
      Adjuntos:this.ParteForm.value['adjuntos']

    });

    this.http.post('http://localhost:8000/api/trabajador/partesTrabajo',{
      Cliente: this.historico[0].Cliente,
      Fecha : this.historico[0].Fecha,
      Horas_Totales : this.historico[0].Horas_Totales,
      Horas_Montaje: this.historico[0].Horas_Montaje,
      Descripcion: this.historico[0].Descripcion,
      Materiales: this.historico[0].Materiales,
      Observaciones: this.historico[0].Observaciones,
      Firma_trabajador: this.historico[0].Firma_trabajador,
      Firma_cliente: this.historico[0].Firma_cliente,
      id: this.historico[0].id,
      Adjuntos: this.historico[0].Adjuntos,
    }, { headers : { 'content-type': 'application/json'}}).subscribe((res : any) =>{
      this.datos = res;
      console.log(this.datos);
    })
    console.log(this.historico);
    this.clear();
}

clear(): void {
  this.ParteForm.reset();

}

nomostrar(){
  this.muestro = false;
}

}
