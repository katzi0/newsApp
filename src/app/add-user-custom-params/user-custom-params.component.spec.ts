import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserCustomParamsComponent } from './user-custom-params.component';

describe('AddUserCustomParamsComponent', () => {
  let component: AddUserCustomParamsComponent;
  let fixture: ComponentFixture<AddUserCustomParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserCustomParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserCustomParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
