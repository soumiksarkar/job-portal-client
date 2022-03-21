import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplicationsComponent } from './employee-applications.component';

describe('EmployeeApplicationsComponent', () => {
  let component: EmployeeApplicationsComponent;
  let fixture: ComponentFixture<EmployeeApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
