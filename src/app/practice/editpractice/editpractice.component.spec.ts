import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpracticeComponent } from './editpractice.component';

describe('EditpracticeComponent', () => {
  let component: EditpracticeComponent;
  let fixture: ComponentFixture<EditpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
