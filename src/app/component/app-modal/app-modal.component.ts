import { Component, Input, OnInit } from '@angular/core';
import { IJobs } from 'src/app/model/model';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

  @Input() jobInfo: IJobs;

  constructor() { }

  ngOnInit() {
  }

}
