import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PATIENTS } from '../mock-patient';
import { PatientService } from 'src/app/service/patient.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;

  constructor(private patientService: PatientService) {
    this.patients = this.patientService.retrievePatientsList();
    console.log("patients: " + this.patients);
   }

  ngOnInit() {
  }
  
  onSelectPatient(patient: Patient) {
    this.selectedPatient = patient;
    // console.log("selected Patient: " + this.selectedPatient.getFirstName());
  }

  updatePatientsList(){
    this.patients = this.patientService.retrievePatientsList();

    //quick fix for null pointer on deletion, should be handled by routing
    this.selectedPatient = this.patients[0];
  }

}