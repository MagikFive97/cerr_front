import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGerenciaComponent } from './dashboard-gerencia.component';

describe('DashboardGerenciaComponent', () => {
  let component: DashboardGerenciaComponent;
  let fixture: ComponentFixture<DashboardGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
