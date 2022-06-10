import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Empleado } from '../employee';
@Component({
  selector: 'app-table-trabajadores',
  templateUrl: './table-trabajadores.component.html',
  styleUrls: ['./table-trabajadores.component.scss']
})
export class TableTrabajadoresComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
  Empleados: Empleado[] = [];
  datos:any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.http.get('http://localhost:8000/api/gerencia/trabajadores',
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res:any) =>{
      this.Empleados = res.data;
      this.dtTrigger.next();
      console.log(this.Empleados);
    });
    
  }

  deleteClient(id: Number){
    this.http.delete(`http://127.0.0.1:8000/api/gerencia/trabajadores/${id}/delete`,
    
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
     .subscribe((res) => res = 'Delete successful');
  }

  editarClient(e: Empleado){

  }
   
}
