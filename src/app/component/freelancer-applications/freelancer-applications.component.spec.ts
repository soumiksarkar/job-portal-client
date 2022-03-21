import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerApplicationsComponent } from './freelancer-applications.component';

describe('FreelancerApplicationsComponent', () => {
  let component: FreelancerApplicationsComponent;
  let fixture: ComponentFixture<FreelancerApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
