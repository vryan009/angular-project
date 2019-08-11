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
  @Output() emitSubmit = new EventEmitter<boolean>();

  @ViewChild('firstName', { static: false, }) firstName: ElementRef;
  @ViewChild('lastName', { static: false, }) lastName: ElementRef;

  buttonDisplayName: String = "Save";
  isButtonDisabled: boolean = false;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    // console.log("On init patient-details: " + this.patient.getFirstName());
    // console.log("On init patient-details bday: " + this.patient.getBirthDate());
  }

  onSave(isSubmitted: boolean){
    // console.log("OnSAVE " + submit);
    // console.log("NATIVE: " + this.firstName.nativeElement.value);
    // console.log("Update successful!" + this.patient.getId());
    // console.log("old name!" + this.patient.getFirstName());

    this.updatePatientInformation();
    this.patientService.updatePatient(this.patient);

    // console.log("Get: " + this.patientService.retrievePatientById(this.patient.getId()).getFirstName());
    this.callOutputEmitter(isSubmitted);
  }

  updatePatientInformation(){
    this.patient.setFirstName(this.firstName.nativeElement.value);
    this.patient.setLastName(this.lastName.nativeElement.value);
    // console.log("new firstname: " + this.patient.getFirstName());
    // console.log("new lastname: " + this.patient.getLastName());
  }

  callOutputEmitter(isSubmitted: boolean){
    this.emitSubmit.emit(isSubmitted);
  }

}