import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGerenciaComponent } from './principal-gerencia.component';

describe('PrincipalGerenciaComponent', () => {
  let component: PrincipalGerenciaComponent;
  let fixture: ComponentFixture<PrincipalGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalGerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
