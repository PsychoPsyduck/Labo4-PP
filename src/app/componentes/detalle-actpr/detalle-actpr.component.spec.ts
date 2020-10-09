import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActprComponent } from './detalle-actpr.component';

describe('DetalleActprComponent', () => {
  let component: DetalleActprComponent;
  let fixture: ComponentFixture<DetalleActprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleActprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
