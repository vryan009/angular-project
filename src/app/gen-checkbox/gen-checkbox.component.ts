import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gen-checkbox',
  templateUrl: './gen-checkbox.component.html',
  styleUrls: ['./gen-checkbox.component.css']
})
export class GenCheckboxComponent implements OnInit {

  @Input() checkboxDisplayName : String;
  @Input() checkboxValue: boolean;

  constructor() { }

  ngOnInit() {
    console.log("initial checkbox: " + this.checkboxValue);
  }

  onChange() {
    console.log("Checbox value: " + this.checkboxValue);
  }

}
