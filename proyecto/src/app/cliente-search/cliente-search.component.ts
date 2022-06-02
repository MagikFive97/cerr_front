import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente/cliente.service';
@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styleUrls: ['./cliente-search.component.scss']
})
export class ClienteSearchComponent implements OnInit {

  Clientes$!: Observable<Cliente[]>;
  private searchTerms = new Subject<string>();
  public cliente: Cliente[] = [];

  constructor(private client: ClienteService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.Clientes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.client.searchClientes(term)),
    );
    
    this.Clientes$.subscribe((res : any) => {
      this.cliente = res.data;
      console.log('encontro_en_la_busqueda:', this.cliente.length);
    });
  }
}
