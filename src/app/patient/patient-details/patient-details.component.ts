import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  model;

  @Input() patient: Patient;

  constructor() {}

  ngOnInit() {
    console.log("On init patient-details: " + this.patient.firstName);
    console.log("On init patient-details bday: " + this.patient.birthdate);
  }

}
