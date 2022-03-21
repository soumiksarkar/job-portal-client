import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  toastMessage: string = '';
  formModal: any;

  public newJobForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.newJobForm = this.formBuilder.group({
      jobTitle: [''],
      exp: [''],
      skills:[''],
      jobDesc: ['']
    })
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("newJobModal")
    );
  }

  showDashboard(){
    this.router.navigateByUrl("/employer/dashboard");
  }

  postNewJob(){
    this.formModal.show();
  }

  onPostClick(){
    console.log(this.newJobForm.value.jobTitle);
    console.log(this.newJobForm.value.exp);
    console.log(this.newJobForm.value.skills);
    console.log(this.newJobForm.value.jobDesc);

    this.formModal.hide();

    // api call to post the job in DB.
    // on success
    var toast = new window.bootstrap.Toast(
      document.getElementById("liveToast")
    )
    this.toastMessage = 'Job Posted Successfully'
    toast.show()

    
  }

  showEmployerProfile(){
    this.router.navigateByUrl("/employer/profile");
  }

  onLogout() {
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");
  }

}
