import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpracticeComponent } from './addpractice.component';

describe('AddpracticeComponent', () => {
  let component: AddpracticeComponent;
  let fixture: ComponentFixture<AddpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
