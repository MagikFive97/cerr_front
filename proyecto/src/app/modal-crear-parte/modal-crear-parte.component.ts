import { Component, OnInit , Input } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import {ParteTrabajo} from '../parte';

@Component({
  selector: 'app-modal-crear-parte',
  templateUrl: './modal-crear-parte.component.html',
  styleUrls: ['./modal-crear-parte.component.scss']
})
export class ModalCrearParteComponent implements OnInit {
  @Input() muestro: boolean | undefined;
  historico: ParteTrabajo[] = [];
  ParteForm: FormGroup;

  constructor() {
    this.ParteForm  = new FormGroup({
      cliente: new FormControl(''),
      fecha: new FormControl(''),
      htaller: new FormControl(''),
      hmontaje: new FormControl(''),
      conceptos: new FormControl(''),
      materiales: new FormControl(''),
      observaciones: new FormControl(''),
      firma_trabajador: new FormControl(''),
      firma_cliente: new FormControl('')

    })}

  ngOnInit(): void {
  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      cliente: this.ParteForm.value['cliente'],
      fecha: this.ParteForm.value['fecha'],
      htaller: this.ParteForm.value['htaller'],
      hmontaje: this.ParteForm.value['hmontaje'],
      conceptos: this.ParteForm.value['conceptos'],
      materiales: this.ParteForm.value['materiales'],
      observaciones: this.ParteForm.value['observaciones'],
      firma_trabajador: this.ParteForm.value['firma_trabajador'],
      firma_cliente: this.ParteForm.value['firma_cliente']

    });
    console.log(this.historico);
}

clear(): void {
  this.ParteForm.reset();

}

nomostrar(){
  this.muestro = false;
}

}
