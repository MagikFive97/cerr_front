import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTrabajadoresComponent } from './table-trabajadores.component';

describe('TableTrabajadoresComponent', () => {
  let component: TableTrabajadoresComponent;
  let fixture: ComponentFixture<TableTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTrabajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
