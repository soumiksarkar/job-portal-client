import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/app.util';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  showProfileFlag: boolean = false;

  public filterForm !: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ng on init");
    this.showProfileFlag = false;
    this.filterForm = this.formBuilder.group({
      skillSets: [''],
      salary: ['']
    })
  }

  // onFilterSubmit() {
  //   console.log(this.filterForm.value.skillSets);
  //   console.log(this.filterForm.value.salary);

  //   // make api call to retrieve results based on these filters and refresh the results
  // }

  showProfile() {
    //console.log("inside profile");
    this.showProfileFlag = true;
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  showDashboard() {
    this.showProfileFlag = false;
    this.router.navigateByUrl('/freelancer/dashboard');
  }

  showApplications(){
    this.router.navigateByUrl('/freelancer/applications');
  }

  onLogout() {
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");
  }

}
