import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesTrabajoComponent } from './partes-trabajo.component';

describe('PartesTrabajoComponent', () => {
  let component: PartesTrabajoComponent;
  let fixture: ComponentFixture<PartesTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartesTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartesTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
