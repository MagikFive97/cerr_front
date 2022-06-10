import { HttpClient } from '@angular/common/http';
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
  ParteForm: FormGroup = new FormGroup({});

  parte : ParteTrabajo[] = [];
  datos: any;

  constructor(public http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.ParteForm  = new FormGroup({
      Cliente: new FormControl(this.parteTrabajoHijo[0].Cliente),
      Fecha: new FormControl(this.parteTrabajoHijo[0].Fecha),
      Horas_Totales: new FormControl(''),
      Horas_Montaje: new FormControl(''),
      Descripcion: new FormControl(this.parteTrabajoHijo[0].Descripcion),
      Materiales: new FormControl(this.parteTrabajoHijo[0].Materiales),
      Observaciones: new FormControl(this.parteTrabajoHijo[0].Observaciones),
      Firma_trabajador: new FormControl(''),
      Firma_cliente: new FormControl('')

    })
  }

  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Cliente: this.parteTrabajoHijo[0].Cliente,
      Fecha: this.parteTrabajoHijo[0].Fecha,
      Horas_totales: this.ParteForm.value['Horas_Totales'],
      Horas_montaje: this.ParteForm.value['Horas_Montaje'],
      Descripcion: this.ParteForm.value['Descripcion'],
      Materiales: this.ParteForm.value['Materiales'],
      Observaciones: this.ParteForm.value['Observaciones'],
      Firma_trabajador: this.ParteForm.value['Firma_trabajador'],
      Firma_cliente: this.ParteForm.value['Firma_cliente'],
      id:this.parteTrabajoHijo[0].id
    });
    this.http.post(`http://localhost:8000/api/trabajador/partesTrabajo/${this.parteTrabajoHijo[0].id}/editar`,{
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

    this.clear();
}

clear(): void {
  this.ParteForm.reset();
}

}
