import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearParteComponent } from './modal-crear-parte.component';

describe('ModalCrearParteComponent', () => {
  let component: ModalCrearParteComponent;
  let fixture: ComponentFixture<ModalCrearParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
