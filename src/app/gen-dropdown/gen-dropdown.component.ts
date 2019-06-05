import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-dropdown',
  templateUrl: './gen-dropdown.component.html',
  styleUrls: ['./gen-dropdown.component.css']
})
export class GenDropdownComponent implements OnInit {

  @Input() LABEL_DROPDOWN: String;
  @Input() dropdownOptionDefault: String;
  @Input() dropdownOptions: String[];
  @Input() selectedDropdownOption: String;

  constructor() { }

  ngOnInit() {
    console.log("selected dropdown option " + this.selectedDropdownOption);
  }

  onChange(option){
    this.selectedDropdownOption = option;
    console.log("You selected: " + this.selectedDropdownOption);
  }

}
