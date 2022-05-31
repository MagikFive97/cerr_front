import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy , Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ParteTrabajo } from '../parte';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnDestroy, OnInit {
  @Output() newItemEvent = new EventEmitter<ParteTrabajo>();

  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
 
 datos:any;
 
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res:any) =>{
      this.datos = res.data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  addNewItem(parte : ParteTrabajo) {
    this.newItemEvent.emit(parte);
  }
}
