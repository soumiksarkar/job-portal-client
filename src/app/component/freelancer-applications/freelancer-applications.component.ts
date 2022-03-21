import { Component, OnInit } from '@angular/core';
import { IAppliedJobs, IJobs } from 'src/app/model/model';
import { JobService } from 'src/app/shared/jobs.service';
declare var window: any;

@Component({
  selector: 'app-freelancer-applications',
  templateUrl: './freelancer-applications.component.html',
  styleUrls: ['./freelancer-applications.component.scss']
})
export class FreelancerApplicationsComponent implements OnInit {

  formModal: any;
  modalJobInfo: IJobs;

  jobList: Array<IAppliedJobs> = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.jobService.getAllAppliedJobs(user.data.id)
      .subscribe(
        res => {
          this.jobList = res;
        }, err => {
          console.log(err);
        }
      )
  }

  showDetails(jobId: number) {
    let selected = this.jobList.find(e => e.id === jobId);
    this.modalJobInfo = {
      id: selected.id,
      jobTitle: selected.jobTitle,
      reqExp: selected.reqExp,
      skills: selected.skills,
      jobDesc: selected.jobDesc,
      salary: selected.salary,
      emplyrId: selected.emplyrId,
      email: selected.email,
      org: selected.org,
      createdOn: selected.createdOn
    }
    this.formModal.show();
  }

}
