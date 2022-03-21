import { Injectable } from '@angular/core';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class JobModalService {

  formModal: any;
  modalJobTitle: string = '';
  modalJobDescription: string = '';

  constructor() { 
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  showModal(jobTitle: string, jobDescription: string){
    this.modalJobTitle = jobTitle;
    this.modalJobDescription = jobDescription;
    this.formModal.show();
  }


}
