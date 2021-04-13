import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosgeneralesComponent } from './registrosgenerales.component';

describe('RegistrosgeneralesComponent', () => {
  let component: RegistrosgeneralesComponent;
  let fixture: ComponentFixture<RegistrosgeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosgeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
