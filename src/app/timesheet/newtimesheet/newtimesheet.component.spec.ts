import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtimesheetComponent } from './newtimesheet.component';

describe('NewtimesheetComponent', () => {
  let component: NewtimesheetComponent;
  let fixture: ComponentFixture<NewtimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
