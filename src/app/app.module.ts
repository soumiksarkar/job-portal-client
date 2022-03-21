import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreelancerComponent } from './component/freelancer/freelancer.component';
import { EmployerComponent } from './component/employer/employer.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreelancerProfileComponent } from './component/freelancer-profile/freelancer-profile.component';
import { FreelancerDashboardComponent } from './component/freelancer-dashboard/freelancer-dashboard.component';
import { FreelancerApplicationsComponent } from './component/freelancer-applications/freelancer-applications.component';
import { AppModalComponent } from './component/app-modal/app-modal.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { EmployeeApplicationsComponent } from './component/employee-applications/employee-applications.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    FreelancerComponent,
    EmployerComponent,
    LoginComponent,
    FreelancerProfileComponent,
    FreelancerDashboardComponent,
    FreelancerApplicationsComponent,
    AppModalComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeeApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
