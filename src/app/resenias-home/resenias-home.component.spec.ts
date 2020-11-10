import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasHomeComponent } from './resenias-home.component';

describe('ReseniasHomeComponent', () => {
  let component: ReseniasHomeComponent;
  let fixture: ComponentFixture<ReseniasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseniasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
