import { Injectable } from '@angular/core';
import { Patient } from '../patient/patient';

@Injectable({
  providedIn: 'root'
})
export class MockPatientService {

  patient: Patient;
  mockPatients: Patient[] = [];

  constructor() {
    //initialization of dummy data
    //approach will be replaced by another service (once the data from back-end api is established)
    this.patient = new Patient(0,
      'System',
      '',
      'Default User',
      '',
      '',
      '',
      '../assets/images/id0.jpg');
    this.mockPatients.push(this.patient);

    this.patient = new Patient(1,
      'Jayzon Bryan',
      'Padua',
      'De Leon',
      '1994-15-12',
      'Tondo, Manila',
      '09151430951',
      '../assets/images/id1.jpg');
    this.mockPatients.push(this.patient);

    this.patient = new Patient( 2,
      'Scarlett',
      'Widow',
      'Johansson',
      '2001-01-01',
      'Ayala, Makati',
      '09122344567',
      '../assets/images/id2.jpg');
    this.mockPatients.push(this.patient);

    this.patient = new Patient( 3,
      'Tony',
      'Pepper',
      'Stark',
      '2010-10-10',
      'BGC, Taguig',
      '09199876543',
      '../assets/images/id3.jpg');
    this.mockPatients.push(this.patient);

    //clear patient data
    this.patient = null;
   }

   getMockPatients(): Patient[]{
     return this.mockPatients;
   }

   deleteMockPatient(p: Patient): void {
    this.patient = p;
    //set default index to -1 (not found)
    let index = -1;

    //retrieve index element positioning in the array based on ID
    this.mockPatients.find(
      (patient, id) => {
        if(patient.getId() === this.patient.getId()){
          index = id;
        }
      }
    );

    //delete from the mock patient list based on the retrieved positioning index
    if (index >= -1) {
      this.mockPatients.splice(index, 1);
    }

    //clear patient data
    this.patient = null;
   }
}