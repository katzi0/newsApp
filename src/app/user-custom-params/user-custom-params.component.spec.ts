import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomParamsComponent } from './user-custom-params.component';

describe('UserCustomParamsComponent', () => {
  let component: UserCustomParamsComponent;
  let fixture: ComponentFixture<UserCustomParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCustomParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCustomParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
