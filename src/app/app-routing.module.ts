import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { EmployeeApplicationsComponent } from './component/employee-applications/employee-applications.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { EmployerComponent } from './component/employer/employer.component';
import { FreelancerApplicationsComponent } from './component/freelancer-applications/freelancer-applications.component';
import { FreelancerDashboardComponent } from './component/freelancer-dashboard/freelancer-dashboard.component';
import { FreelancerProfileComponent } from './component/freelancer-profile/freelancer-profile.component';
import { FreelancerComponent } from './component/freelancer/freelancer.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    component: LoginComponent
  }, 
  {
    path: "freelancer",
    canActivate: [AuthenticationGuard],
    component: FreelancerComponent,
    children: [
      {
        path: 'dashboard',
        component: FreelancerDashboardComponent
      },
      {
        path: 'applications',
        component: FreelancerApplicationsComponent
      },
      {
        path: 'profile',
        component: FreelancerProfileComponent
      }
    ]
  }, 
  {
    path: "employer",
    canActivate: [AuthenticationGuard],
    component: EmployerComponent,
    children: [
      {
        path: 'dashboard',
        component: EmployeeDashboardComponent
      },
      {
        path: 'profile',
        component: EmployeeProfileComponent
      },
      {
        path: 'view-applications',
        component: EmployeeApplicationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
