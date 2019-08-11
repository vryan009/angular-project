import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: Patient;
  @Output() emitSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    // console.log("On init patient: " + this.patient.getFirstName());
    // console.log("On init patient: " + this.patient.getBirthDate());
  }

  callOutputEmitter(isSubmitted: boolean){
    this.emitSubmit.emit(isSubmitted);
  }

}
