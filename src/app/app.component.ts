import { Component } from '@angular/core';
import { PATIENTS } from './patient/mock-patient';
import { PatientService } from './service/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private patientService: PatientService){
  }

  title = 'angular-project';

  /* Pass the String button name to be the generic button component*/
  buttonDisplayName: String = 'Submit!';
  /* Pass the boolean button disabled to the generic button component */
  isButtonDisabled: boolean = false;

  /* Pass the String name of the input field */
  inputTextDisplayName: String = 'First Name';

  /* Pass the String text to be searched to the generic input component*/
  inputValue_TEXT: String = 'Enter username';
  inputValue_NUMBER: Number = 0;

  /* Pass the String button type to the generic input component*/
  //can be text, password, number, search...
  inputType_TEXT: String = 'text';
  inputType_PASSWORD: String = 'password';
  inputType_NUMBER: String = 'number';

  /* Pass the String text to be searched to the generic search button component*/
  inputTextSearch: String = '';

  /* Pass the String checkbox display to the generic checkbox component*/
  checkboxDisplayName: String = 'I agree to the Terms of Service and Privacy Policy';
  /* Pass the boolean checkbox value to the generic checkbox component*/
  checkboxValue: boolean = false;

  /* Pass the String dropdown label to the generic dropdown component*/
  LABEL_DROPDOWN: String = "Dropdown:";
  /* Pass the String default dropdown option to the generic dropdown component*/
  dropdownOptionDefault: String = "Select your option";
  /* Pass the String dropdown options to the generic dropdown component*/
  dropdownOptions: String[] = ['Apple', 'Mango', 'Orange', 'Grapes'];
  /* Pass the String selected dropdown to the generic dropdown component*/
  selectedDropdownOption: String = 'Mango';


  /* Pass the String list to the generic unordered list component*/
  itemList: String[] = ['Mugs','Accessories', 'Bags', 'T-shirts', 'Posters'];
  /* Pass the String list type to the generic ordered list component*/
  /* 1 - numbers (default), A - uppercase letters, a - lowercase,
  I - uppercase Roman number, i - lowercase Roman number*/
  itemListType: String = 'i';

  /* Pass the PATIENT list date to the generic table component*/
  mockPatients = this.patientService.patientsList;
  
}