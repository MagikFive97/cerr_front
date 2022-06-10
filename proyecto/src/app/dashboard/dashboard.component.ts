import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

}
