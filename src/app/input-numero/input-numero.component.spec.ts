import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumeroComponent } from './input-numero.component';

describe('InputNumeroComponent', () => {
  let component: InputNumeroComponent;
  let fixture: ComponentFixture<InputNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
