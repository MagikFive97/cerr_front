
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy , Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-table-cliente',
  templateUrl: './table-cliente.component.html',
  styleUrls: ['./table-cliente.component.scss']
})
export class TableClienteComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
  clientes: Cliente[] = [];
  datos:any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.http.get('http://localhost:8000/api/gerencia/clientes', 
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res:any) =>{
      this.clientes = res.data;
      this.dtTrigger.next();
    });
    
  }

  deleteClient(id: Number){
    this.http.delete(`http://127.0.0.1:8000/api/gerencia/clientes/${id}/delete`,
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res) => res = 'Delete successful');
  }

  editClient(){
    
  }

}
