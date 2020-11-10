import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasContactoComponent } from './resenias-contacto.component';

describe('ReseniasContactoComponent', () => {
  let component: ReseniasContactoComponent;
  let fixture: ComponentFixture<ReseniasContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseniasContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniasContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
