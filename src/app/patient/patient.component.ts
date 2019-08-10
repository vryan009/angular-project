import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: Patient;
  @Output() update = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    console.log("On init patient: " + this.patient.getFirstName());
    console.log("On init patient: " + this.patient.getBirthDate());
  }

  getUpdated(){
    this.update.emit(true);
  }

}
