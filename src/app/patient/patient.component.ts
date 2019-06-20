import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: Patient;

  constructor() {}

  ngOnInit() {
    console.log("On init patient: " + this.patient.firstName);
    console.log("On init patient: " + this.patient.birthdate);
  }

}
