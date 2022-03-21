import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formModal: any;
  modalJobTitle: string = '';
  modalJobDescription: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  viewApplications(){
    this.router.navigateByUrl("/employer/view-applications");
  }

  showDetails(){
    this.modalJobTitle = 'Software Developer III';
    this.modalJobDescription = 'Test Job Description';
    this.formModal.show();
  }

}
