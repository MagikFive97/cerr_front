import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit , Input} from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Cliente } from '../cliente';
@Component({
  selector: 'app-modal-crear-cliente',
  templateUrl: './modal-crear-cliente.component.html',
  styleUrls: ['./modal-crear-cliente.component.scss']
})
export class ModalCrearClienteComponent implements OnInit {

  @Input() muestro: boolean | undefined;
  historico: Cliente[] = [];
  ClienteForm: FormGroup;
  datos : any;
  constructor(public http: HttpClient) {
    this.ClienteForm  = new FormGroup({
      Telefono: new FormControl(''),
      Razon_Social: new FormControl(''),
      Provincia: new FormControl(''),
      Observaciones: new FormControl(''),
      Dni : new FormControl(''),
      Nombre: new FormControl(''),
      Localidad: new FormControl(''),
      Email: new FormControl(''),
      Direccion: new FormControl(''),
      Cod_postal: new FormControl(''),
      Beneficio: new FormControl('')
    })}

  ngOnInit(): void {

  }
  guardarCambios() {
    //push añade al final del array
    this.historico.push({
      Telefono: this.ClienteForm.value['Telefono'],
      Razon_Social: this.ClienteForm.value['Razon_Social'],
      Provincia: this.ClienteForm.value['Provincia'],
      Observaciones: this.ClienteForm.value['Observaciones'],
      Nombre: this.ClienteForm.value['Nombre'],
      Localidad: this.ClienteForm.value['Localidad'],
      Email: this.ClienteForm.value['Email'],
      Direccion: this.ClienteForm.value['Direccion'],
      Cod_postal: this.ClienteForm.value['Cod_postal'],
      Beneficio: this.ClienteForm.value['Beneficio'],
      id: this.ClienteForm.value['id'],
      Dni: this.ClienteForm.value['Dni']
    });

    this.http.post('http://localhost:8000/api/gerencia/clientes/',{
      Telefono: this.historico[0].Telefono,
      Razon_Social : this.historico[0].Razon_Social,
      Provincia : this.historico[0].Provincia,
      Observaciones: this.historico[0].Observaciones,
      Nombre: this.historico[0].Nombre,
      Localidad: this.historico[0].Localidad,
      Email: this.historico[0].Email,
      Direccion: this.historico[0].Direccion,
      Cod_postal: this.historico[0].Cod_postal,
      Beneficio: this.historico[0].Beneficio,
      id: this.historico[0].id,
      Dni: this.historico[0].Dni
    },{ headers : { 'content-type': 'application/json' ,
    'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res : any) =>{
      this.datos = res;
      console.log(this.datos);
      this.clear();
    })
    // console.log(this.historico[0].Telefono);
}

clear(): void {
  this.ClienteForm.reset();

}

nomostrar(){
  this.muestro = false;
}

}
