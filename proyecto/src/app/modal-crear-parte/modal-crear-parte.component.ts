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
      Horas_totales: new FormControl(0),
      Horas_montaje: new FormControl(0),
      Descripcion: new FormControl(''),
      Materiales: new FormControl(''),
      Observaciones: new FormControl(''),
      Firma_trabajador:new FormControl(0),
      Firma_cliente:new FormControl(0),
    })}

  ngOnInit(): void {
  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Cliente: this.ParteForm.value['Cliente'],
      Fecha: this.ParteForm.value['Fecha'],
      Horas_totales: this.ParteForm.value['Horas_totales'],
      Horas_montaje: this.ParteForm.value['Horas_montaje'],
      Descripcion: this.ParteForm.value['Descripcion'],
      Materiales: this.ParteForm.value['Materiales'],
      Observaciones: this.ParteForm.value['Observaciones'],
      Firma_trabajador: this.ParteForm.value['Firma_trabajador'],
      Firma_cliente: this.ParteForm.value['Firma_cliente'],
      id:this.ParteForm.value['id'],

    });

    this.http.post('http://localhost:8000/api/trabajador/partesTrabajo',{
      Cliente: this.historico[0].Cliente,
      Fecha : this.historico[0].Fecha,
      Horas_totales : this.historico[0].Horas_totales,
      Horas_montaje: this.historico[0].Horas_montaje,
      Descripcion: this.historico[0].Descripcion,
      Materiales: this.historico[0].Materiales,
      Observaciones: this.historico[0].Observaciones,
      Firma_trabajador: this.historico[0].Firma_trabajador,
      Firma_cliente: this.historico[0].Firma_cliente,
      id: this.historico[0].id,
    }, { headers : { 'content-type': 'application/json' ,
    'Authorization' : `Bearer ${localStorage.getItem('token')}`}}).subscribe((res : any) =>{
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
