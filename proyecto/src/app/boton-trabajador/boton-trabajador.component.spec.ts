import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTrabajadorComponent } from './boton-trabajador.component';

describe('BotonTrabajadorComponent', () => {
  let component: BotonTrabajadorComponent;
  let fixture: ComponentFixture<BotonTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
