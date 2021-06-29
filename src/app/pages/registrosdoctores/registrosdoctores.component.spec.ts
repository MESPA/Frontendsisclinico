import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosdoctoresComponent } from './registrosdoctores.component';

describe('RegistrosdoctoresComponent', () => {
  let component: RegistrosdoctoresComponent;
  let fixture: ComponentFixture<RegistrosdoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosdoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosdoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
