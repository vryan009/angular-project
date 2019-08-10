import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient/patient';

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {

  @Input() mockPatients: Patient[];
  selectedPatient: Patient;

  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'birthdate'];

  constructor() { }

  ngOnInit() { }

  onSelect(patient: Patient){
    this.selectedPatient = patient;
    console.log("selected patient:" + this.selectedPatient.getId() + " " + this.selectedPatient.getFirstName() + " " + this.selectedPatient.getLastName);
  }

}