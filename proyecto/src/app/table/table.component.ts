import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy , Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ParteTrabajo } from '../parte';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements  OnInit {
  @Output() newItemEvent = new EventEmitter<ParteTrabajo>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
  parte: ParteTrabajo[] = [];
  datos:any;
 
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.http.get('http://localhost:8000/api/trabajador/partesTrabajo',
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res:any) =>{
      this.parte = res.data;
      this.dtTrigger.next();
      console.log(this.parte);
    });
    
  }

  deleteClient(id: Number){
    this.http.delete(`http://127.0.0.1:8000/api/trabajador/partesTrabajo/${id}/delete` ,
    { headers : {
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res) => res = 'Delete successful');
  }

  addNewItem(parte : ParteTrabajo) {
    this.newItemEvent.emit(parte);
    console.log(parte);
  }

  imprimir(id: Number){
    this.http.get(`http://localhost:8000/api/trabajador/partesTrabajo/${id}/imprimir-pdf`,
    { headers : { 'content-type': 'application/pdf' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res:any) =>{
      this.datos = res.data;
      console.log(this.datos);
    });
  }
}
