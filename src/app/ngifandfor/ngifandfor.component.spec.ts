import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifandforComponent } from './ngifandfor.component';

describe('NgifandforComponent', () => {
  let component: NgifandforComponent;
  let fixture: ComponentFixture<NgifandforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifandforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifandforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
