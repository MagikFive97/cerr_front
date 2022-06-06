import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearTrabajadorComponent } from './modal-crear-trabajador.component';

describe('ModalCrearTrabajadorComponent', () => {
  let component: ModalCrearTrabajadorComponent;
  let fixture: ComponentFixture<ModalCrearTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
