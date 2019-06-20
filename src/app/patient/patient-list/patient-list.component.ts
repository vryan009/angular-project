import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PATIENTS } from '../mock-patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;

  constructor() {
    this.patients = PATIENTS;
    console.log("patients: " + this.patients);
   }

  ngOnInit() {
  }
  
  onSelectPatient(patient: Patient) {
    this.selectedPatient = patient;
    console.log("selected Patient: " + this.selectedPatient.firstName);
  }

}