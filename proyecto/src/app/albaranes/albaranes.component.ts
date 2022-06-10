import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albaranes',
  templateUrl: './albaranes.component.html',
  styleUrls: ['./albaranes.component.scss']
})
export class AlbaranesComponent implements OnInit {
  rol: string | null | undefined ;
  constructor() { }

  ngOnInit(): void {
    this.rol  = localStorage.getItem('rol');
  }

}
