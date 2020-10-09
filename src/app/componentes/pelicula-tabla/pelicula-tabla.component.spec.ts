import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTablaComponent } from './pelicula-tabla.component';

describe('PeliculaTablaComponent', () => {
  let component: PeliculaTablaComponent;
  let fixture: ComponentFixture<PeliculaTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
