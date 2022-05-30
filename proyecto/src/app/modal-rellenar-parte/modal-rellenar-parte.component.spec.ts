import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRellenarParteComponent } from './modal-rellenar-parte.component';

describe('ModalRellenarParteComponent', () => {
  let component: ModalRellenarParteComponent;
  let fixture: ComponentFixture<ModalRellenarParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRellenarParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRellenarParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
