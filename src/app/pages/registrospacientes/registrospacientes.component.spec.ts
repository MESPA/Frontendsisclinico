import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrospacientesComponent } from './registrospacientes.component';

describe('RegistrospacientesComponent', () => {
  let component: RegistrospacientesComponent;
  let fixture: ComponentFixture<RegistrospacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrospacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrospacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
