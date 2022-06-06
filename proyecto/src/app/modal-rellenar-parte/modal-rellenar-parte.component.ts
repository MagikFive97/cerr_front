import { Component, OnInit , Input} from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import {ParteTrabajo} from '../parte';
@Component({
  selector: 'app-modal-rellenar-parte',
  templateUrl: './modal-rellenar-parte.component.html',
  styleUrls: ['./modal-rellenar-parte.component.scss']
})
export class ModalRellenarParteComponent implements OnInit {
  
  @Input() parteTrabajoHijo: ParteTrabajo[] = []; 
  historico: ParteTrabajo[] = [];
  ParteForm: FormGroup;

  parte : ParteTrabajo[] = [];

  constructor() {
    this.ParteForm  = new FormGroup({
      Cliente: new FormControl(''),
      Fecha: new FormControl(''),
      Horas_Totales: new FormControl(''),
      Horas_Montaje: new FormControl(''),
      Descripcion: new FormControl(''),
      Materiales: new FormControl(''),
      Observaciones: new FormControl(''),
      Firma_trabajador: new FormControl(''),
      Firma_cliente: new FormControl('')

    })}

  ngOnInit(): void {
    //falta recoger bien los datos de parte de trabajo como modeloParteTrabajo
    // this.parte.push(this.parteTrabajoHijo);
  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Cliente: this.ParteForm.value['Cliente'],
      Fecha: this.ParteForm.value['Fecha'],
      Horas_Totales: this.ParteForm.value['Horas_Totales'],
      Horas_Montaje: this.ParteForm.value['Horas_Montaje'],
      Descripcion: this.ParteForm.value['Descripcion'],
      Materiales: this.ParteForm.value['materiales'],
      Observaciones: this.ParteForm.value['observaciones'],
      Firma_trabajador: this.ParteForm.value['firma_trabajador'],
      Firma_cliente: this.ParteForm.value['firma_cliente'],
      id:this.ParteForm.value['id'],
      Adjuntos:this.ParteForm.value['adjuntos'],

    });
    console.log(this.historico);
    console.log(this.parteTrabajoHijo);
}

clear(): void {
  this.ParteForm.reset();

}

}
