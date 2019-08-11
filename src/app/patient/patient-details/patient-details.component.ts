import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from 'src/app/service/patient.service';
import { UtilityService } from 'src/app/service/utility.service';

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

  

  //TO DO: EDITING feature should be dependent on the user role
  isButtonDisabled: boolean = false;

  isModified: boolean = false;
  BUTTON_DISPLAY_NAME_SUBMIT: String;
  BUTTON_DISPLAY_NAME_CANCEL: String;
  BUTTON_DISPLAY_NAME_DELETE: String;
  BUTTON_CLASS_SUBMIT: String;
  BUTTON_CLASS_CANCEL: String;
  BUTTON_CLASS_DELETE: String;

  constructor(private patientService: PatientService, private utilityService: UtilityService) {

    //retrieve constants from utilityService
    this.BUTTON_CLASS_SUBMIT = this.utilityService.BUTTON_CLASS_SUBMIT;
    this.BUTTON_CLASS_CANCEL = this.utilityService.BUTTON_CLASS_CANCEL;
    this.BUTTON_CLASS_DELETE = this.utilityService.BUTTON_CLASS_DELETE;
    this.BUTTON_DISPLAY_NAME_SUBMIT = this.utilityService.BUTTON_DISPLAY_NAME_SUBMIT;
    this.BUTTON_DISPLAY_NAME_CANCEL = this.utilityService.BUTTON_DISPLAY_NAME_CANCEL;
    this.BUTTON_DISPLAY_NAME_DELETE = this.utilityService.BUTTON_DISPLAY_NAME_DELETE;
  }

  ngOnInit() {
    // console.log("On init patient-details: " + this.patient.getFirstName());
    // console.log("On init patient-details bday: " + this.patient.getBirthDate());
  }

  onSave(isSubmitted: boolean){
    this.updatePatientInformation();

    //will only update the patient record in the patient service if the field data were indeed modified
    if(this.isModified){
      this.patientService.updatePatient(this.patient);
      // console.log("Get: " + this.patientService.retrievePatientById(this.patient.getId()).getFirstName());

      //reset isModified flag once patient record in the patient service were successfully updated
      this.isModified = false;
      
      this.callOutputEmitter(isSubmitted);
    }
  }

  onCancel(isCancelled: boolean){
    //TO DO: Routing to go back to parent page
    //reset currently selected patient
    this.patient = null;
    this.callOutputEmitter(isCancelled);
  }

  onDelete(isDeleted: boolean){
    //TO DO: Add confirmation message
    //TO DO: Routing to go back to parent page
    this.patientService.deletePatient(this.patient);

    //reset currently selected patient
    this.patient = null;
    this.callOutputEmitter(isDeleted);
  }


  updatePatientInformation(){
    if(this.patient.getFirstName() !== this.firstName.nativeElement.value ||
      this.patient.getLastName() !== this.lastName.nativeElement.value) {
        this.isModified = true;
        this.patient.setFirstName(this.firstName.nativeElement.value);
        this.patient.setLastName(this.lastName.nativeElement.value);
        // console.log("new firstname: " + this.patient.getFirstName());
        // console.log("new lastname: " + this.patient.getLastName());
      }
  }

  callOutputEmitter(isSubmitted: boolean){
    this.emitSubmit.emit(isSubmitted);
  }

}