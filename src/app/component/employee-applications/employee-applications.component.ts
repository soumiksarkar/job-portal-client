import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-employee-applications',
  templateUrl: './employee-applications.component.html',
  styleUrls: ['./employee-applications.component.scss']
})
export class EmployeeApplicationsComponent implements OnInit {

  formModal: any;

  constructor() { }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("applcntPrflMdl")
    );
  }

  showApplicantProfile(){
    this.formModal.show();
  }

}
