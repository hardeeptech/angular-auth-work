import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpracticeComponent } from './listpractice.component';

describe('ListpracticeComponent', () => {
  let component: ListpracticeComponent;
  let fixture: ComponentFixture<ListpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
