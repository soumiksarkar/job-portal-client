import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IJobs } from 'src/app/model/model';
import { JobService } from 'src/app/shared/jobs.service';
declare var window: any;

@Component({
  selector: 'app-freelancer-dashboard',
  templateUrl: './freelancer-dashboard.component.html',
  styleUrls: ['./freelancer-dashboard.component.scss']
})
export class FreelancerDashboardComponent implements OnInit {
  

  public filterForm !: FormGroup;
  formModal: any;
  modalJobInfo: IJobs;
  toastMessage: string = '';

  jobList: Array<IJobs> = [];
  totalJobs: number = 0;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private jobService: JobService) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      skillSets: [''],
      salary: ['']
    })
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.jobService.getAllJobs().subscribe( data => {
      this.jobList = data;
      this.totalJobs = this.jobList.length;
    } );
  }

  onFilterSubmit() {
    console.log(this.filterForm.value.skillSets);
    console.log(this.filterForm.value.salary);

    // make api call to retrieve results based on these filters and refresh the results
  }

  onApply(jobId: number) {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user.data);
    let job = this.jobList.find(item => item.id === jobId);
    let request = {
      'applcntId': user.data.id,
      'jobId': jobId,
      'emplyrId': job.emplyrId 
    }
    this.jobService.applyJob(request)
      .subscribe(
        res => {
          this.showToast("Job Applied Successfully");
        }, err => {
          this.showToast("Something Went Wrong");
        }
      );
  }

  private showToast(msg: string) {
    this.toastMessage = msg;
    var toast = new window.bootstrap.Toast(
      document.getElementById("liveToast")
    );

    toast.show();
  }

  showDetails(jobId: number){
    let selectedItem: IJobs = this.jobList.find(item => item.id === jobId);

    this.modalJobInfo = selectedItem;

    this.formModal.show();
  }

}
