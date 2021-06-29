import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroscitasComponent } from './registroscitas.component';

describe('RegistroscitasComponent', () => {
  let component: RegistroscitasComponent;
  let fixture: ComponentFixture<RegistroscitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroscitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroscitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
