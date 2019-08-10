import { Injectable } from '@angular/core';
import  { Patient } from '../patient/patient';
import { PATIENTS } from '../patient/mock-patient';
import { MockPatientService } from './mock-patient.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient: Patient;
  patientsList: Patient[];

  //retrieval of the initialized mock data from mock-patient.service
  constructor(private mockPatientService: MockPatientService) {}
   
  //returns the list of all patients in the mock constant
  retrievePatientsList() {
    this.patientsList = this.mockPatientService.getMockPatients();
    return this.patientsList;
  }

  //returns a single patient by id
  retrievePatientById(id: Patient["id"]) {
    this.patient = this.patientsList.find(patient => patient.getId() == id);
    return this.patient;
  }

  //update the patient information in the patients list
  updatePatient(p: Patient) {
    this.patient = p;
    this.patientsList.find(patient => patient.getId() == this.patient.getId()).setFirstName(this.patient.getFirstName());
    this.patientsList.find(patient => patient.getId() == this.patient.getId()).setLastName(this.patient.getLastName());
    
    console.log("INSIDE SERVICE: NEW NAME" + this.patientsList.find(patient => patient.getId() == this.patient.getId()).getFirstName());
  }

}