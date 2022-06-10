import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  datos: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
   
  }

  max(){
    this.http.get('http://localhost:8000/api/logout', 
    { headers : { 'content-type': 'application/json' ,
     'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
    .subscribe((res:any) =>{
      this.datos = res.data;
      console.log("deslogueado");
    });
  }

}
