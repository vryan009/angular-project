import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  model;

  @Input() patient: Patient;
  @Output() update = new EventEmitter<boolean>();

  @ViewChild('firstName', { static: false, }) firstName: ElementRef;
  @ViewChild('lastName', { static: false, }) lastName: ElementRef;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    console.log("On init patient-details: " + this.patient.getFirstName());
    console.log("On init patient-details bday: " + this.patient.getBirthDate());
  }

  onSave(){
    console.log("NATIVE: " + this.firstName.nativeElement.value);
    console.log("Update successful!" + this.patient.getId());
    console.log("old name!" + this.patient.getFirstName());

    this.updatePatientInformation();
    this.patientService.updatePatient(this.patient);

    console.log("Get: " + this.patientService.retrievePatientById(this.patient.getId()).getFirstName());
    //this.emitUpdate();
  }

  updatePatientInformation(){
    this.patient.setFirstName(this.firstName.nativeElement.value);
    this.patient.setLastName(this.lastName.nativeElement.value);
    console.log("new firstname: " + this.patient.getFirstName());
    console.log("new lastname: " + this.patient.getLastName());
  }

  emitUpdate(){
    console.log("EMIT UPDATE");
    this.update.emit(true);
  }

}