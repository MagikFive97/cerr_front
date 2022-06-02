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
    //falta recoger bien los datos de parte de trabajo como modeloParteTrabajo
    // this.parte.push(this.parteTrabajoHijo);
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
    console.log(this.parteTrabajoHijo);
}

clear(): void {
  this.ParteForm.reset();

}

}
