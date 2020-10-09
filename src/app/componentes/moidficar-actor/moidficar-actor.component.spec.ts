import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoidficarActorComponent } from './moidficar-actor.component';

describe('MoidficarActorComponent', () => {
  let component: MoidficarActorComponent;
  let fixture: ComponentFixture<MoidficarActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoidficarActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoidficarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
